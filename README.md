# Whip Chat - Whip on Send 🞭

Visual Studio Code extension that plays an epic whip sound every time you send a message to GitHub Copilot chat.

## Features

- 🎵 Plays a whip sound when pressing Enter in the chat
- ⚡ Works automatically without configuration
- 🔊 Compatible with Windows, macOS and Linux
- 🎮 Guaranteed fun while coding

## Usage

Tested with node `v22.18.0`.

1. Install the extension
2. Open GitHub Copilot chat (Ctrl+Alt+I)
3. Type your message
4. Press Enter
5. Enjoy the whip! 🞭

### VSCode launch.json example

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run Extension",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}"
      ],
      "outFiles": [
        "${workspaceFolder}/out/**/*.js"
      ],
      "preLaunchTask": "npm: compile"
    }
  ]
}
```

## Requirements

- Visual Studio Code 1.85.0 or higher
- GitHub Copilot (optional, but recommended)

## Credits

Whip sound: [Sound source if you have it]

## License

MIT