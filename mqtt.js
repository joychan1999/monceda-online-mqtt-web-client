// connecting to the broker
$("#connect").on('click', function() {
    // changing the status when connected to the broker
    $('#status').val("Connecting....")
    client = mqtt.connect($('#broker').val())

    client.on("connect", function() {
        $('#status').val("Connected!")
    })

// getting the value of tpic and the payload
    topic = $("#topic").val()
    message = $('#payload').val()
//prepending the messages to the  table
    client.on('message', function(topic, message) {
        var date = new Date()
        var time = (date.toDateString() + " " + date.toLocaleTimeString())
        if (topic == $('#sub-topic').val()) {
            $("#incomingData").prepend(
                "<tr><td>" +
                topic +
                "</td><td>" +
                message.toString() +
                "</td><td>" +
                time +
                "</td><td>"
            );
        }
    });
});

// Connecting to Publish
$("#publishButton").on('click', function() {
    var pubTopic = $("#topic").val()
    var payLoad = $('#payload').val()
    var pubDate = new Date()
    var pubTime = (pubDate.toDateString() + " " + pubDate.toLocaleTimeString())
    client.publish(pubTopic, payLoad)
    $("#publishData").prepend(
        "<tr><td>" +
        pubTopic +
        "</td><td>" +
        payload +
        "</td><td>" +
        pubTime +
        "</td><td>"
    );
});

// Connecting to Subscribe
$("#subscribeButton").on('click', function() {
    var subTopic = $("#subscribeTopic").val()
    var subDate = new Date()
    var subTime = (subDate.toDateString() + " " + subDate.toLocaleTimeString())
    client.subscribe(subTopic)
    $("#subscribedData").prepend(
        "<tr><td>" +
        subTopic +
        "</td><td>" +
        subTime +
        "</td><td>"
    );
});



