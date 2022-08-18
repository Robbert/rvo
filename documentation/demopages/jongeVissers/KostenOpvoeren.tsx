import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const KostenOpvoeren = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar
        items={[
          { label: 'Home', icon: 'home', link: '#' },
          { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Jonge Vissers 2020', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Controleer uw gegevens',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Correspondentie',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--correspondentie&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Datum verleningsverzoek',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--datum&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'completed',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten',
                size: 'md',
                line: 'substep-start',
              },
              {
                state: 'doing',
                label: 'Kosten opvoeren',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten-opvoeren&viewMode=story',
                size: 'sm',
                line: 'substep-end',
              },
              { state: 'incomplete', label: 'Bijlagen', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Samenvatting', link: '#', size: 'md', line: 'straight' },
              {
                state: 'incomplete',
                label: 'Ondertekenen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten-ondertekening&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="xl">
              <div className="intro">
                <Heading type="h1" textContent="Kosten opvoeren"></Heading>
                <dl className="rvo-data">
                  <dt>Omschrijving van de investering</dt>
                  <dd>Aanschaf voertuig</dd>
                </dl>
              </div>
              <form>
                <LayoutColumnRow size="md">
                  <Fieldset legend="">
                    <TextInputField
                      labelText="Hoeveel kost het vissersvaartuig (exclusief btw)?"
                      valueType="number"
                    ></TextInputField>
                  </Fieldset>
                  <Fieldset legend="">
                    <RadioButtonField
                      layout="vertical"
                      name="vv-eigenaar"
                      labelText="Wordt u volledig of gedeeltelijk eigenaar van het vissersvaartuig?"
                      options={[
                        {
                          id: 'vveiga',
                          labelText: 'Volledig eigenaar',
                        },
                        { id: 'vveigb', labelText: 'Mede eigenaar' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>
                  <Fieldset legend="">
                    <TextInputField
                      labelText="Wat zijn de kosten waarvoor u subsidie wilt aanvragen?"
                      helperText="Uitgebreide uitleg over de subsidie."
                      expandableHelperText={true}
                      expandableHelperTextTitle="Meer informatie"
                      valueType="number"
                    ></TextInputField>
                  </Fieldset>

                  <div className="rvo-button-group">
                    <Button
                      kind="secondary"
                      size="md"
                      textContent="Opslaan en sluiten"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                    <Button
                      kind="primary"
                      size="md"
                      textContent="Opslaan en verder"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                  </div>
                </LayoutColumnRow>
              </form>
            </LayoutColumnRow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default KostenOpvoeren;
