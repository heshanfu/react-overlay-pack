// @flow
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setAddon(infoAddon);
setDefaults({ inline: true });
setOptions({
  name: 'react-overlay-pack',
  url: 'https://github.com/evenchange4/react-overlay-pack',
  sortStoriesByKind: true,
});

const context = (require: any).context('../src/', true, /\.example\.js$/);
function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
