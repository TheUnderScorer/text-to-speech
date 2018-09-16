import { Synth } from './index';
import { Body, Form, Input, Pitch, Rate, VoiceSelect } from '../elements';

const speak = () => {

    //Add body background animation
    Body.style.background = '#141414 url(img/wave.gif)';

    if ( Synth.speaking ) {

        console.error( 'Already speaking :<' );
        return;

    }

    if ( Input.value === '' ) {
        return;
    }

    const SpeakText = new SpeechSynthesisUtterance( Input.value );

    SpeakText.onend = () => {
        console.log( 'Done speaking...' );

        Body.style.background = '#141414';
    };

    //Handle errors
    SpeakText.onerror = () => {
        console.error( 'Something went wrong...' );
    };

    const SelectedVoice = VoiceSelect.selectedOptions[ 0 ].getAttribute( 'data-name' );

    const getSelectedVoice = voice => {
        if ( voice.name === SelectedVoice ) {
            SpeakText.voice = voice;
        }
    };

    Synth.getVoices().forEach( getSelectedVoice );

    //Lastly set pitch and rate

    SpeakText.rate = Rate.value;
    SpeakText.pitch = Pitch.value;

    Synth.speak( SpeakText );

};

const handleSubmit = e => {

    e.preventDefault();

    speak();

    Input.blur();

};
Form.addEventListener( 'submit', handleSubmit );

VoiceSelect.addEventListener( 'change', speak );

