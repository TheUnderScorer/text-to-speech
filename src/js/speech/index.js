//Grab Speech Synthesis API
import { VoiceSelect } from '../elements';
import './speak';

export const Synth = window.speechSynthesis;

let voices = [];

const getVoices = () => {

    voices = Synth.getVoices();

    //Append voices to voices dropdown
    const append = voice => {

        const Option = document.createElement( 'option' );

        Option.setAttribute( 'data-lang', voice.lang );
        Option.setAttribute( 'data-name', voice.name );
        Option.innerText = voice.name;

        VoiceSelect.appendChild( Option );

    };
    voices.forEach( append );

};

Synth.onvoiceschanged = getVoices;
