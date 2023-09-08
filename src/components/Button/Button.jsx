import './Button.css';

const Button = () => {
  const handleClick = () => {
    console.log('click');
    const section = document.body.querySelector('#form'),
      corps = document.querySelector('.corps');

    console.log(section);
    console.log(corps);
    section.classList.add('active');
    corps.classList.add('none');
  };
  return (
    <>
      <button onClick={handleClick} className='show-modal'>
        Intéressé ?
      </button>
    </>
  );
};

export default Button;
