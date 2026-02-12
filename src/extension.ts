import * as vscode from 'vscode';
import * as path from 'path';
const player = require('node-wav-player');

export function activate(context: vscode.ExtensionContext) {
    console.log('¡Extensión "whip-chat" activada!');

    const soundPath = path.join(context.extensionPath, 'sounds', 'whip.wav');

    // Comando personalizado que reproduce sonido y envía el mensaje
    const submitCommand = vscode.commands.registerCommand(
        'whip-chat.submitWithSound',
        async () => {
            console.log('Comando whip-chat.submitWithSound ejecutado');
            
            // Reproducir el latigazo
            try {
                await player.play({
                    path: soundPath,
                    sync: false // No esperar a que termine
                });
                console.log('Sonido reproducido');
            } catch (error) {
                console.error('Error reproduciendo sonido:', error);
            }
            
            // Enviar el mensaje al chat
            await vscode.commands.executeCommand('workbench.action.chat.submit');
        }
    );

    context.subscriptions.push(submitCommand);
}

export function deactivate() {}