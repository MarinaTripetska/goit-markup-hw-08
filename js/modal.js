import refs from './refs.js'
const {openModalBtn: openBtn,  closeModalBtn: closeBtn, modal, modalForm, messageArea} = refs;
const STORAGE_KEY = 'inputMsg';


export default () => {

  openBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  modalForm.addEventListener('submit', onFormSubmit)
  messageArea.addEventListener('input', onTextareaInput);
 
  if (localStorage.getItem(STORAGE_KEY) !== null) {
  messageArea.textContent = localStorage.getItem(STORAGE_KEY)
}
  
  function toggleModal() {
  modal.classList.toggle('is-hidden');
}
  
  
  function onFormSubmit(e) {
    e.preventDefault();
    console.log('відправляєм форму');
    toggleModal();
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
    
  }

  function onTextareaInput(e) {
    const message = e.target.value
    localStorage.setItem(STORAGE_KEY, message)
  }
}

