$(function() {

    $('#btnUnsecure').click(function() {
        $.ajax('/api/demo').then(
            function(data) {
                $('#result').text(data);
            },
            function(err) {
                $('#result').text(JSON.stringify(err));
            }
        );

    });


    $('#btnSecure').click(function () {
        $.ajax('/token', {
            type: 'post',
            data: {
                username: 'maurice',
                password: 'pass',
                grant_type:'password'
            }
        }).then(function(e) {
            console.log(e);

            $.ajax('/api/demo',
            {
                headers: {
                    Authorization: 'Bearer ' + e.access_token
                }
            }).then(
                function (data) {
                    $('#result').text(data);
                },
                function (err) {
                    $('#result').text(JSON.stringify(err));
                }
            );
        });

        

    });
});