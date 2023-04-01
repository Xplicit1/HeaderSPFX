//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  //PlaceholderContent,
  // PlaceholderName,
} from '@microsoft/sp-application-base';
//import SomeComponent from './SomeComponent';
//import * as strings from 'HeaderFooterApplicationCustomizerStrings';
import styles from '../../AppCustomizer.module.scss';
import '../../../assets/dist/tailwind.css';

//import { escape } from '@microsoft/sp-lodash-subset';
//import * as React from 'react';
//import * as ReactDom from 'react-dom';
//import SomeComponent, { SomeComponentProps } from './SomeComponent';

//const LOG_SOURCE: string = 'HeaderFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderFooterApplicationCustomizer extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {
  // These have been added
  //private _topPlaceholder: PlaceholderContent | undefined;
  //private _bottomPlaceholder: PlaceholderContent | undefined;
  public onInit(): Promise<void> {
    const menu = document.querySelector(
      '#spSiteHeader > div > div > div > div > div'
    );

    console.log(menu);
    menu.innerHTML = `<div class=${styles['menu-items']}>
    <div class="text-blue-500 hover:text-blue-800">Item1</div>
    <div class="text-blue-500 hover:text-blue-800">Item2</div>
    <div class="text-blue-500 hover:text-blue-800">Item3</div>
    </div>`;
    /* if (menu) {
      console.log('menu exist');

      const el: React.ReactElement<SomeComponentProps> = React.createElement(
        SomeComponent,
        {}
      );

      ReactDom.render(el, menu);
    } else {
      console.log('menu does not exist');
    } */

    //Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // Wait for the placeholders to be created (or handle them being changed) and then
    // render.
    /* this.context.placeholderProvider.changedEvent.add(
      this,
      this._renderPlaceHolders
    ); */

    return Promise.resolve();
  }

  /* private _renderPlaceHolders(): void {
    console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
    console.log(
      'Available placeholders: ',
      this.context.placeholderProvider.placeholderNames
        .map((name) => PlaceholderName[name])
        .join(', ')
    );

    // Handling the top placeholder
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error('The expected placeholder (Top) was not found.');
        return;
      }

      if (this.properties) {
        let topString: string = this.properties.Top;
        if (!topString) {
          topString = '(Top property was not defined.)';
        }

        if (this._topPlaceholder.domElement) {
          this._topPlaceholder.domElement.innerHTML = `
          <div class="${styles.app}">
            <div class="${styles.top}">
              <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
                topString
              )}
            </div>
          </div>`;
        }
      }
    }

    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose }
        );

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error('The expected placeholder (Bottom) was not found.');
        return;
      }

      if (this.properties) {
        let bottomString: string = this.properties.Bottom;
        if (!bottomString) {
          bottomString = '(Bottom property was not defined.)';
        }

        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
          <div class="${styles.app}">
            <div class="${styles.bottom}">
              <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
                bottomString
              )}
            </div>
          </div>`;
        }
      }
    }
  } */
  /* private _onDispose(): void {
    console.log(
      '[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.'
    );
  }
*/
}
