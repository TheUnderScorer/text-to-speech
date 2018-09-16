import { Pitch, PitchValue, Rate, RateValue } from '../elements';

Rate.addEventListener( 'change', () => RateValue.textContent = Rate.value );

Pitch.addEventListener( 'change', () => PitchValue.textContent = Pitch.value );
