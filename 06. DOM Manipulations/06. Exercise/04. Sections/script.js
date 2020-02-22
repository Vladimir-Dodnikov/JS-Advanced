function create(words) {
   const $content = document.querySelector("#content");

   for (const word of words) {
      const $div = document.createElement('div');
      const $p = document.createElement('p');
      $p.textContent = word;
      $p.style.display = 'none';
      $div.appendChild($p);

      $div.addEventListener('click', function(){
         $p.style.display = 'block';
      })

      $content.appendChild($div);
   }
}