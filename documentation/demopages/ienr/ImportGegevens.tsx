import {
  Button,
  ButtonGroup,
  DateInputField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const ImportGegevens = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        submenuItems={[]}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
          },
          {
            label: 'Mijn dossier',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MobileMenuBar>
      <LayoutColumnRow size="xl">
        <MenuBar
          items={[
            {
              label: 'Identificatie en Registratie van uw dieren',
              link: '#',
            },
            {
              align: 'right',
              label: 'Hulp & Contact',
              link: '#',
            },
            {
              align: 'right',
              label: 'English',
              icon: 'wereldbol',
              link: '#',
            },
            {
              align: 'right',
              label: 'Boer Overveen B.V',
              link: '#',
              active: true,
              icon: 'user',
            },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          maxWidth="lg"
        />

        <main className="">
          <div className="rvo-max-width-layout rvo-max-width-layout--lg">
            <div>
              <LayoutColumnRow size="xl">
                <Heading type="h1" noMargins={true}>
                  Gegevens runderen
                </Heading>

                <LayoutColumnRow size="md">
                  <LayoutColumnRow size="xs">
                    <LayoutColumnRow size="md">
                      <a
                        className="rvo-link rvo-link--no-underline rvo-link--with-icon rvo-link--normal"
                        href="iframe.html?args=&id=demo-pagina-s-i-r-import--default&viewMode=story"
                      >
                        <span
                          className="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw  rvo-link__icon--before"
                          role="img"
                          aria-label="Terug"
                        ></span>
                        Terug
                      </a>
                      <Fieldset legend="">
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>1</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>2</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>3</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>4</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>5</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                        <LayoutColumnRow row={true} alignItems="start">
                          <span>6</span>
                          <TextInputField label="Landcode" size="sm"></TextInputField>
                          <TextInputField label="Levensnummer" size="sm"></TextInputField>
                          <TextInputField label="Werknummer"></TextInputField>
                          <DateInputField label="Geboortedatum"></DateInputField>
                          <SelectField label="Geslacht"></SelectField>
                          <SelectField label="Land van geboorte/oorsprong"></SelectField>
                          <TextInputField label="Oorspr. ID, niet EU land"></TextInputField>
                        </LayoutColumnRow>
                      </Fieldset>
                      <ButtonGroup>
                        <Button>Opslaan</Button>
                        <Button kind="secondary">Opslaan en rij toevoegen</Button>
                      </ButtonGroup>
                    </LayoutColumnRow>
                  </LayoutColumnRow>
                </LayoutColumnRow>
              </LayoutColumnRow>
            </div>
          </div>
        </main>
        <Footer
          columns={[
            {
              label: 'RVO',
              items: [
                { content: 'Over ons', link: '#' },
                { content: 'Contact', link: '#' },
                { content: 'Pers', link: '#' },
                { content: 'Zaken regelen bij RVO', link: '#' },
              ],
            },
            {
              label: 'Over deze site',
              items: [
                { content: 'Privacy', link: '#' },
                { content: 'Cookies en anti-spam', link: '#' },
                { content: 'Toegankelijkheid', link: '#' },
                { content: 'Proclaimer', link: '#' },
              ],
            },
            {
              label: 'Snel naar',
              items: [
                { content: 'Onderwerpen A t/m Z', link: '#' },
                { content: 'Klantenpanel', link: '#' },
                { content: 'Documenten en publicaties', link: '#' },
                { content: 'Overheidspublicaties en auteursrecht', link: '#' },
              ],
            },
            {
              label: 'Blijf op de hoogte',
              items: [
                { content: 'Social media', link: '#' },
                { content: 'RSS', link: '#' },
                { content: 'Gratis nieuwsbrief', link: '#' },
              ],
            },
          ]}
        />
      </LayoutColumnRow>
    </body>
  );
};

export default ImportGegevens;
