import * as vscode from 'vscode';
import * as path from 'path';
const player = require('node-wav-player');

let isEnabled = true; // Estado de la extensión

export function activate(context: vscode.ExtensionContext) {
    console.log('¡Extensión activada!');

    const soundPath = path.join(context.extensionPath, 'sounds', 'whip.wav');

    // Cargar estado guardado (si existe)
    isEnabled = context.globalState.get('whipChatEnabled', true);

    async function playSound() {
        if (!isEnabled) {
            return; // No hacer nada si está deshabilitada
        }

        try {
            await player.play({
                path: soundPath,
                sync: false
            });
            console.log('Sonido reproducido');
        } catch (error) {
            console.error('Error reproduciendo sonido:', error);
        }
    }

    // Comando principal: enviar con sonido
    const submitCommand = vscode.commands.registerCommand(
        'whip-chat.submitWithSound',
        async () => {
            playSound();
            await vscode.commands.executeCommand('workbench.action.chat.submit');
        }
    );

    // Comando: Habilitar extensión
    const enableCommand = vscode.commands.registerCommand(
        'whip-chat.enable',
        async () => {
            isEnabled = true;
            await context.globalState.update('whipChatEnabled', true);
            vscode.window.showInformationMessage('🞭 Whip Chat habilitado');
        }
    );

    // Comando: Deshabilitar extensión
    const disableCommand = vscode.commands.registerCommand(
        'whip-chat.disable',
        async () => {
            isEnabled = false;
            await context.globalState.update('whipChatEnabled', false);
            vscode.window.showInformationMessage('🔇 Whip Chat deshabilitado');
        }
    );

    // Comando: Alternar (toggle) extensión
    const toggleCommand = vscode.commands.registerCommand(
        'whip-chat.toggle',
        async () => {
            isEnabled = !isEnabled;
            await context.globalState.update('whipChatEnabled', isEnabled);
            
            const status = isEnabled ? '🞭 habilitado' : '🔇 deshabilitado';
            vscode.window.showInformationMessage(`Whip Chat ${status}`);
        }
    );

    context.subscriptions.push(
        submitCommand,
        enableCommand,
        disableCommand,
        toggleCommand
    );
}

export function deactivate() {
    console.log('Extensión desactivada');
}