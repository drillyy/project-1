import Mail from '../images/Mail.png'
import LinkedIn from '../images/linkedin.png'

export default function Info() {
  return (
    <div>
      <h1 className="name">Satoshi Nakamoto</h1>
      <h3 className="title">Bitcoin Inventor</h3>
      <h4>
        <a className="website" href="https://bitcoin.org/en/">bitcoin.org</a>
      </h4>
      <button className="button--email">Email <img className='button--icon' src={Mail} alt='Mail Icon'/></button>
      <button className="button--linkedin">LinkedIn <img className='button--icon' src={LinkedIn} alt='LinkedIn Icon'/></button>
      <h2>About</h2>
      <p>
        Satoshi Nakamoto is the name used by the presumed pseudonymous person or
        persons who developed bitcoin, authored the bitcoin white paper, and
        created and deployed bitcoin's original reference implementation.
      </p>
      <h2>Interests</h2>
      <p>
        Computing | Swimming | Solving Puzzles | Playing Football | Playing
        Chess | Mentoring | Reading | Writing | Going to the Gym | Travelling
      </p>
    </div>
  );
}
