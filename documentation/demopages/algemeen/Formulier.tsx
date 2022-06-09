import React from 'react';
import 'normalize.css';
import '../common/style.scss';
import Header from '../common/components/Header';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <div className="rvo-navigation rvo-navigation--hemelblauw">
        <div className="rvo-max-width-wrapper">
          <nav className="rvo-main-menu">
            <ul className="rvo-menu rvo-menu--main-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  Menu item
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--plus"></span>
                  Menu item with icon
                </a>
              </li>
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium">
                  Last menu item
                </a>
              </li>
            </ul>
          </nav>
          <nav className="rvo-toggle-menu">
            <ul className="rvo-menu rvo-menu--toggle-menu">
              <li className="rvo-menu-item">
                <a href="#" className="rvo-menu-link rvo-menu-link--medium rvo-menu-link--toggle">
                  <span className="rvo-icon rvo-icon--medium rvo-icon--before rvo-icon--wit rvo-icon--menu"></span>Menu
                  toggle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="rvo-progress-tracker-active">
        <div className="rvo-progress-tracker rvo-progress-tracker--vertical">
          <div className="rvo-main-steps">
            <div className="rvo-process-step rvo-process-step--process-name">Progress tracker</div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--completed">
              <a href="#" className="rvo-process-step-link">
                Step completed
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--doing">
              <a href="#" className="rvo-process-step-link">
                Step doing
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                Step incomplete
              </a>
            </div>
          </div>
          <div className="rvo-sub-steps">
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--small rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                Process first sub-step
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--small rvo-process-step--doing">
              <a href="#" className="rvo-process-step-link">
                Process sub-step doing
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--small rvo-process-step--completed">
              <a href="#" className="rvo-process-step-link">
                Process sub-step completed
              </a>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--small rvo-process-step--incomplete">
              <span className="rvo-process-step-link rvo-process-step-link--disabled">Process sub-step disabled</span>
            </div>
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--sub rvo-process-step--small rvo-process-step--incomplete">
              <a href="#" className="rvo-process-step-link">
                Process last sub-step
              </a>
            </div>
          </div>
          <div className="rvo-main-steps">
            <div className="rvo-process-step rvo-process-step--default rvo-process-step--medium rvo-process-step--incomplete">
              <span className="rvo-process-step-link rvo-process-step-link--disabled">Process step disabled</span>
            </div>
            <div className="rvo-process-step rvo-process-step--process-completed">Process completed</div>
          </div>
        </div>
        <div className="rvo-form">
          <div className="intro">
            <a href="startpagina.html" className="back-link">
              <span className="rvo-icon rvo-icon--sm rvo-icon--before rvo-icon--hemelblauw rvo-icon--terug"></span>Back
              link
            </a>
            <h1>Form Title</h1>
          </div>
          <form>
            <fieldset>
              <h2>Contactpersoon</h2>
              <div className="rvo-form-field">
                <label htmlFor="contactpersoon">Contactpersoon</label>
                <select id="contactpersoon">
                  <option>Optie A</option>
                </select>
                <button className="rvo-button rvo-button--tertiary rvo-button--small rvo-button-in-form">
                  <span className="rvo-icon rvo-icon--sm rvo-icon-before rvo-icon--hemelblauw rvo-icon--bewerken"></span>
                  Contactpersoon & bedrijfsgegevens wijzigen
                </button>
              </div>
              <h2>Organisatie</h2>
              <div className="rvo-form-field rvo-form-field--options">
                <legend>
                  U drijft een onderneming in de zin van de Wet IB of Wet Vpb en bent geen publieke kennisinstelling?
                  <span className="rvo-helper-text">
                    Bent u geen ondernemer in de zin van de Wet IB (Inkomstenbelasting 2001) of Wet VpB
                    (Vennootschapsbelasting 1969), dan kunt u geen WBSO aanvragen. U kunt ook geen WBSO aanvragen
                    indienen als u een publieke kennisinstelling bent (zie artikel 1, onderdeel m van de WVA).
                  </span>
                </legend>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="ib-ja" className="rvo-option">
                    <input type="radio" id="ib-ja" name="ib"></input>Ja
                  </label>
                  <label htmlFor="ib-nee" className="rvo-option">
                    <input type="radio" id="ib-nee" name="ib"></input>Nee
                  </label>
                </div>
                <h2>Gegevens aanvrager in aanvraagperiode</h2>
                <div className="rvo-form-field">
                  <label htmlFor="aantal-werknemers">Prognose totaal aantal werknemers</label>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" id="aantal-werknemers"></input>
                </div>
                <div className="rvo-form-field">
                  <label htmlFor="eigen-werknemers">(Waarvan) eigen S&O-werknemers</label>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" id="eigen-werknemers"></input>
                </div>
                <h2>S&O-uurloon</h2>
                <label htmlFor="so-verklaring">
                  Heeft u in 2020 S&O-werkzaamheden verricht waarvoor u een S&O-verklaring heeft ontvangen?
                  <div className="rvo-helper-text rvo-helper-text--warning">
                    Voor u geldt in 2022 een forfaitar uurloon van €29.
                  </div>
                </label>
                <div className="rvo-options rvo-options--rows">
                  <label htmlFor="so-ja" className="rvo-option">
                    <input type="radio" id="so-ja" name="so"></input>Ja
                  </label>
                  <label htmlFor="so-nee" className="rvo-option">
                    <input type="radio" id="so-nee" name="so"></input>Nee
                  </label>
                </div>
                <h2>Technologiegebied</h2>
                <div className="rvo-form-field">
                  <label htmlFor="technologiegebied">Technologiegebied</label>
                  <select id="technologiegebied">
                    <option>Optie A</option>
                  </select>
                </div>
                <details>
                  <summary>Overzicht technologiegebieden</summary>
                  <dl className="rvo-data">
                    <dt>aard- en milieuwetenschappen</dt>
                    <dd>geowetenschappen | meteorologie | klimaatonderzoek | water & ecologie onderzoek</dd>
                  </dl>
                </details>
                <h2>Periode aanvraag</h2>
                <div className="rvo-form-field">
                  <label htmlFor="maand-aanvang">
                    Maand aanvang
                    <div className="rvo-helper-text">
                      Vul hier de startmaand in van de periode waarover u WBSO aanvraagt.
                    </div>
                  </label>
                  <select id="maand-aanvang">
                    <option>Januari</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <div className="rvo-button-group">
              <button className="utrecht-button utrecht-button--secondary-action rvo-button--medium">
                Opslaan en sluiten
              </button>
              <button className="utrecht-button utrecht-button--primary-action rvo-button--medium">
                Opslaan en verder
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Formulier;
