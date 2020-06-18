import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modeContext } from "./Context";

const Brief = () => {
  const [mode, setMode] = useContext(modeContext);
  return (
    <div className={mode}>
      <div id="brief">
        <Link to={"/"}>
          <h6 className="Prev">
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
          </h6>
        </Link>
        <br />
        <h3 className="text-center">How will it happen?</h3>
        <p>
          <br />
          Conscious breathing is an umbrella term for medical and therapeutic
          methods that improve the breathing function. These methods involve
          directing awareness to breathing and developing habits that improve
          respiration. Human respiration is controlled consciously or
          unconsciously. Conscious breathing can aid in stress reduction,
          improving breath-related conditions.
        </p>

        <p>
          Conscious breathing in meditation usually does not change the depth or
          rhythm of breathing, but uses breathing as an anchor for concentration
          and awareness. <br />
          Mindfulness and Awareness Trainings use conscious breathing for
          training awareness and body consciousness <br /> <br />
        </p>
        <br />
        <p>
          Consciously changing the way you breathe appears to send a signal to
          the brain to adjust the parasympathetic branch of the nervous system,
          which can slow heart rate and digestion and promote feelings of calm
          as well as the sympathetic system, which controls the release of
          stress hormones like cortisol.
        </p>
        <p>
          The 4-7-8 breathing technique, also known as “relaxing breath,”
          involves breathing in for 4 seconds, holding the breath for 7 seconds,
          and exhaling for 8 seconds. This breathing pattern aims to reduce
          anxiety or help people get to sleep. Some proponents claim that the
          method helps people get to sleep in 1 minute.
        </p>
        <br />
        <p>
          You can find the entire details from the Wikipedia.
          <br /> Check-->
          <a
            href="https://en.wikipedia.org/wiki/Conscious_breathing"
            target="_blank"
          >
            Here
          </a>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Brief;
