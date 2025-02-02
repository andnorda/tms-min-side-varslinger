import { LinkPanel } from "@navikt/ds-react";
import { formatToReadableDate } from "../../../utils/date";
import { SpeechBubble } from "@navikt/ds-icons";
import { logAmplitudeEvent, komponent } from "../../../utils/amplitude";

const BeskjedLinkPanel = ({ tittel, dato, link, aktiv, requestDone, isMasked }) => {
  const amplitudeKomponent = aktiv ? komponent.nyBeskjed : komponent.tidligereBeskjed;
  return (
    <LinkPanel
      className="notifikasjon-link-panel beskejd-link-panel"
      border={false}
      href={link}
      onClick={() => {
        logAmplitudeEvent(amplitudeKomponent);
        if (aktiv && !isMasked) {
          requestDone();
        }
      }}
    >
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-4)",
          alignItems: "center",
        }}
      >
        <div className="icon-container beskjed-icon-container">
          <SpeechBubble className="beskjed-icon" fontSize="1.375rem" />
        </div>
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default BeskjedLinkPanel;
