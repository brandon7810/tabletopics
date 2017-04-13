$( document ).ready(function(){

    let questions = [
        {
            question : 'About the incident happened on United Airline,' +
            'what would you do if you were there when it happened?'
        },
        {
            question : 'Morning vs Night. Which one is the best?'
        },
        {
            question : 'If there are two shoes in the store you really love' +
            ' but you can only choose to buy one, how would you choose?'
        },
        {
            question : 'Compare your student life. University vs High School vs Elementary. What was the best?'
        },
        {
            question : 'What is your favourite holiday? Why?'
        },
        {
            question : 'Which day of the week is your favourite? Monday? Friday? Why?'
        },
        {
            question : 'What is your favourite month?'
        },
        {
            question : 'What is your favourite human invention in the history?'
        },
        {
            question : 'What is your favourite creature?'
        },
        {
            question : 'What was your favourite time of your life? (ie. Teenage) Why?'
        },
        {
            question : 'If you could choose to be any famous person in the human history, who would you choose?'
        },
        {
            question : 'How long do you want to live? Why?'
        },
        {
            question : 'What is your favourite movie?'
        },
        {
            question : 'If you have super power to change the history, what would you change for the world in the past?'
        },
        {
            question : 'Share a memorable incident about the world that happened last year or this year. Include your thoughts'
        },
        {
            question : 'Have you received a gift that made you very happy in the past? Share the moment.'
        },
        {
            question : 'Did you give a gift that made a person very happy in the past? Share the moment.'
        },
        {
            question : 'What is your favourite date idea for spending time on a weekend?'
        }
    ];

    questions = shuffle(questions);

    function shuffle(array) {
        var rand, index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
            rand = Math.floor(Math.random() * (index + 1));
            result[index] = result[rand];
            result[rand] = array[index];
        }
        return result;
    }

    $('#start').click(
        function(){
            $('#question').text(questions[0].question);
            console.log(questions.length)
        }
    );

    $('#done').click(
        function(){
            $('#question').text('');
            questions.shift();
            console.log(questions.length)
        }
    );

    $('#pass').click(
        function(){
            questions.push(questions.shift());
            $('#question').text(questions[0].question);
            console.log(questions.length)
        }
    );
});