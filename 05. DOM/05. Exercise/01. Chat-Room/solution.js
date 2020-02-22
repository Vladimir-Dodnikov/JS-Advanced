function solve() {
   let sendElement = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageFiled = document.getElementById('chat_messages');

   sendElement.addEventListener('click', (e) => {

      let newElement = document.createElement('div');
         newElement.innerHTML = input.value;

         newElement.classList.add('message', 'my-message');
         messageFiled.appendChild(newElement);
         input.value = ''; //delete message and return placeholder
   });
}


