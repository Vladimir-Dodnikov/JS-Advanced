function mySolution(){
    //step 1
    const $elements = {
        askQuestionTextArea: document.querySelector('#inputSection textarea'),
        usernameInputField: document.querySelector('#inputSection div input[type="username"]'),
        askQuestionButton: document.querySelector('#inputSection div button'),
        //step 12
        pendingQuestionsDiv: document.querySelector('#pendingQuestions'),
        //step 14
        openQuestionDiv: document.querySelector('#openQuestions')
    };
    //step 2
    $elements.askQuestionButton.addEventListener('click', askQuestionHandler);
    //step 3
    function askQuestionHandler(){
        //step 4
        const question = $elements.askQuestionTextArea.value;
        const givenUsername = $elements.usernameInputField.value;
        const username = givenUsername !== '' ? givenUsername : 'Anonymous';
        //step 6
        let pendingQuestionDiv = createHTMLElement('div', 'pendingQuestion');
        let usernameImage = createHTMLElement('img', null, null, [{k: 'src', v: './images/user.png'},{k: 'width', v: 32},{k:'height', v:32}]);
        let usernameSpan = createHTMLElement('span', null, username);
        let questionParagraph = createHTMLElement('p', null, question);
        let actionsDiv = createHTMLElement('div', 'actions');
        //step 7
        let archiveButton = createHTMLElement('button', 'archive', 'Archive', null, {name: 'click', func: archiveQuestion});
        let openButton = createHTMLElement('button', 'open', 'Open', null, {name: 'click', func: openQuestion});

        //step 11
        actionsDiv = appendChildrenToParent([archiveButton, openButton], actionsDiv);
        pendingQuestionDiv = appendChildrenToParent([usernameImage, usernameSpan, questionParagraph, actionsDiv], pendingQuestionDiv);
        //step 13 - 22 points so far
        $elements.pendingQuestionsDiv.appendChild(pendingQuestionDiv);
    }
    //step 5
    function createHTMLElement(tagName, className, textContent, attributes, event){
        let element = document.createElement(tagName);
        if (className) {
            element.classList.add(className);
        }
        if (textContent) {
            element.textContent = textContent;
        }
        if (attributes) {
            //attributes comes as an array of objects
            attributes.forEach((a) => element.setAttribute(a.k, a.v));
        }
        if (event) {
            element.addEventListener(event.name, event.func);
        }
        return element;
    }
    //step 8
    function archiveQuestion(e) {
        const questionDiv = e.target.parentNode.parentNode;
        questionDiv.remove();
    }
    //step 9
    function openQuestion(e) {
        //step 15
        const questionDiv = e.target.parentNode.parentNode;
        //step 17
        questionDiv.className = 'openQuestion';
        let actionsDiv = questionDiv.querySelector('div.actions');
        actionsDiv.innerHTML = '';
        //step 18
        const replyButton = createHTMLElement('button', 'reply', 'Reply', null, {name: 'click', func: replyQuestion})
        actionsDiv = appendChildrenToParent([replyButton], actionsDiv);
        //step 20
        let replySectionDiv = createHTMLElement('div', 'replySection', null, [{k:'style', v: 'display: none;'}]);
        let replyInput = createHTMLElement('input', 'replyInput', null, [{k: 'type', v: 'text'}, {k: 'placeholder', v: 'Reply to this question here...'}]);
        let replyAnswerButton = createHTMLElement('button', 'replyButton', 'Send', null, {name: 'click', func: addAnswer});
        let answersOL = createHTMLElement('ol', 'reply', null, [{k: 'type', v: 1}]);
        //step 21
        replySectionDiv = appendChildrenToParent([replyInput, replyAnswerButton, answersOL], replySectionDiv);
        questionDiv.appendChild(replySectionDiv);
        //step 16
        $elements.openQuestionDiv.appendChild(questionDiv);
    }
    //step 10
    function appendChildrenToParent(children, parent) {
        children.forEach((c)=>parent.appendChild(c));
        return parent;
    }
    //step 22
    function replyQuestion(e) {
        const buttonText = e.target;
        const replySectionDiv = this.parentNode.parentNode.querySelector('.replySection');

        if (buttonText.textContent === 'Reply') {
            replySectionDiv.style.display = 'block';
            buttonText.textContent = 'Back';
        } else {
            replySectionDiv.style.display = 'none';
            buttonText.textContent = 'Reply';
        }
    }
    //step 23
    function addAnswer(){
        const parent = this.parentNode;
        const answerInput = parent.querySelector('input').value;
        let answerLi = createHTMLElement('li', null, answerInput);
        parent.querySelector('ol').appendChild(answerLi);
    }
}