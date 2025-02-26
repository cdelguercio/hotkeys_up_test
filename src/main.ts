import hotkeys, { HotkeysEvent } from 'hotkeys-js';

// Define the hotkeys options
const hotKeysOptions = {
  keyup: true,
  keydown: false,
};

// Example: Listen for the "a" key
hotkeys('a', hotKeysOptions, (e: KeyboardEvent, d: HotkeysEvent) => {
  // Prevent repeat triggers while the key is held down
  if (!e.repeat) {
    console.log('Pressed "a" key!');
    console.log('Is "a" pressed?', hotkeys.isPressed('a'));
  }
});

// Another example from your snippet. You might have an `eventName` variable:
const eventName = 'b';
hotkeys(eventName, hotKeysOptions, (e: KeyboardEvent, d: HotkeysEvent) => {
  if (!e.repeat) {
    console.log(`Pressed "${eventName}" key!`);
    console.log(`Is "${eventName}" pressed?`, hotkeys.isPressed(eventName));
  }
});

// You can set up more hotkeys similarly

