import "./hint.scss";

import { useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import { FormattedMessage } from "react-intl";
import Mousetrap from "mousetrap";

import Shortcut from "../Shortcut";
import shortcut from "../../shortcut";

const Hint = ({ regex, flags }) => {
  const hintRef = useRef(null);

  useEffect(() => {
    Mousetrap.bindGlobal(shortcut.hint, () => {
      ReactTooltip.show(hintRef.current);
    });

    return () => {
      Mousetrap.unbindGlobal(shortcut.hint);
      ReactTooltip.hide(hintRef.current);
    };
  }, []);

  return (
    <div ref={hintRef} className="hint" data-tip data-for="hint">
      <span className="hint-question">
        <Shortcut command={`ALT + H`} />
        <FormattedMessage id="general.hintQuestion" />
      </span>

      <ReactTooltip
        backgroundColor="#444"
        arrowColor="#444"
        clickable
        id="hint"
        place="top"
        effect="solid"
      >
        <span className="hint-answer">
          /{regex}/{flags}
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Hint;