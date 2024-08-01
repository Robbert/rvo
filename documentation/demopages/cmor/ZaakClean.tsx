import {
  Alert,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  Link,
  MenuBar,
  MobileMenuBar,
} from '@nl-rvo/components';
import '../../../components/text-helpers/index.scss';
import '../common/responsive.scss';
// import '../common/rhs-update.scss';
// import '../common/cmor.scss';

const ZaakClean = () => {
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
      <MenuBar
        items={[
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
        <div className="rvo-max-width-layout rvo-max-width-layout--md">
          <LayoutColumnRow>
            <Breadcrumbs
              items={[
                { label: 'Overzicht', url: '#' },
                { label: 'Mijn dossier', url: '#' },

                { label: 'Eco-regeling 2023' },
              ]}
              size="sm"
            ></Breadcrumbs>

            <LayoutColumnRow size="xl">
              <LayoutColumnRow size="xs">
                <Heading type="h1" noMargins={true}>
                  Eco-regeling 2023
                </Heading>
                <span className="rvo-text--subtle">Gemeenschappelijk Landbouwbeleid</span>
              </LayoutColumnRow>
              <Alert heading="Actie nodig" kind="warning">
                <LayoutColumnRow size="sm">
                  Voer de actie direct uit of bekijk de actie voor meer informatie over wat u moet doen.
                  <ButtonGroup>
                    <Button kind="primary" size="sm">
                      Actie uitvoeren
                    </Button>
                    <Button kind="secondary" size="sm">
                      Bekijk de actie
                    </Button>
                  </ButtonGroup>
                </LayoutColumnRow>
              </Alert>
              <Grid columns="two" gap="3xl">
                <div>
                  <LayoutColumnRow>
                    <div>
                      <span className="rvo-text--subtle">Referentienummer</span>
                      <br />
                      <Heading type="h2" noMargins={true}>
                        ERTKV-309483
                      </Heading>
                      <LayoutColumnRow size="sm">
                        <p className="rvo-text--no-margins">
                          Wilt u uw aanvraagformulier bekijken of iets regelen voor uw aanvraag?
                        </p>
                        <Button>Aanvraag beheren</Button>
                      </LayoutColumnRow>
                    </div>
                    <hr className="rvo-hr"></hr>
                    <div>
                      <LayoutColumnRow>
                        <Heading type="h2" noMargins={true}>
                          Documenten
                        </Heading>
                        <div>
                          <LayoutColumnRow row={true} alignItems="start" justifyContent="space-between">
                            <LayoutColumnRow size="2xs">
                              <p className="rvo-text--bold rvo-text--no-margins">Verzoek om informatie</p>
                              <span className="rvo-text--subtle rvo-text--sm">PDF document | 271.73 KB</span>
                            </LayoutColumnRow>
                            <span className="rvo-text--subtle">14 december 2023</span>
                            <Link icon="downloaden" showIcon="before" noUnderline={true}>
                              Downloaden
                            </Link>
                          </LayoutColumnRow>
                          <hr className="rvo-hr"></hr>
                          <LayoutColumnRow row={true} alignItems="start" justifyContent="space-between">
                            <LayoutColumnRow size="2xs">
                              <p className="rvo-text--bold rvo-text--no-margins">Ontvangstbevestiging</p>
                              <span className="rvo-text--subtle rvo-text--sm">PDF document | 550.73 KB</span>
                            </LayoutColumnRow>
                            <span className="rvo-text--subtle">9 november 2023</span>
                            <Link icon="downloaden" showIcon="before" noUnderline={true}>
                              Downloaden
                            </Link>
                          </LayoutColumnRow>
                          <hr className="rvo-hr"></hr>
                          <LayoutColumnRow row={true} alignItems="start" justifyContent="space-between">
                            <LayoutColumnRow size="2xs">
                              <p className="rvo-text--bold rvo-text--no-margins">Ontvangstbevestiging</p>
                              <span className="rvo-text--subtle rvo-text--sm">PDF document | 550.73 KB</span>
                            </LayoutColumnRow>
                            <span className="rvo-text--subtle">9 november 2023</span>
                            <Link icon="downloaden" showIcon="before" noUnderline={true}>
                              Downloaden
                            </Link>
                          </LayoutColumnRow>
                        </div>
                      </LayoutColumnRow>
                    </div>
                    <hr className="rvo-hr"></hr>
                    <div>
                      <Heading type="h2">Hulp nodig?</Heading>
                      <LayoutColumnRow>
                        <LayoutColumnRow size="xs">
                          <span className="rvo-text--bold">Alles over over Eco-regeling</span>
                          <Button size="sm" kind="secondary" fullWidth={true}>
                            Bekijk regeling
                          </Button>
                        </LayoutColumnRow>
                        <LayoutColumnRow size="xs">
                          <span className="rvo-text--bold">Neem contact op</span>

                          <Button size="sm" kind="secondary" fullWidth={true}>
                            Stel uw vraag via de chat
                          </Button>
                        </LayoutColumnRow>
                      </LayoutColumnRow>
                    </div>
                  </LayoutColumnRow>
                </div>
                <div>
                  <LayoutColumnRow row={true} size="xs">
                    <span className="rvo-text--subtle">Status</span>
                    <Icon icon="info" />
                  </LayoutColumnRow>

                  <Heading type="h2" noMargins={true}>
                    Actie nodig
                  </Heading>
                  <div className="">
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <LayoutColumnRow size="2xs">
                        <span className="rvo-text--sm">Aangevraagd</span>
                        <span className="rvo-text--subtle rvo-text--sm rvo-text--italic">5 december 2023</span>
                      </LayoutColumnRow>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <span className="rvo-text--md">In behandeling</span>
                      <br />
                      <span className="rvo-text--subtle rvo-text--sm rvo-text--italic">13 april 2023</span>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        Step doing
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--substep-start rvo-image-bg-progress-tracker-line-substep-start--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        Step incomplete
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        First sub-step
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        Sub-step doing
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        Sub-step completed
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      Sub-step disabled
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--substep-end rvo-image-bg-progress-tracker-line-substep-end--before">
                      <a className="rvo-link rvo-progress-tracker__step-link" href="#">
                        Last sub-step
                      </a>
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before">
                      Step disabled
                    </div>
                    <div className="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after">
                      Process completed
                    </div>
                  </div>
                </div>
              </Grid>
            </LayoutColumnRow>
          </LayoutColumnRow>
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
    </body>
  );
};

export default ZaakClean;
