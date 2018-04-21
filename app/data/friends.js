var friends = [];
var scores = [];
$.get("/api/friends", function (data) {
    console.log(data);
    for (i=0; i<data.length; i++){
        scores.push(data[i].scores);
        //var name = data[i].name;
        //var image = data[i].photo;
        console.log(scores);
        $("#display").append(
            '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h2 class="modal-title" id="exampleModalLabel">Best Match</h2>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body" align="center">'+
                    '<h3>'+name+'</h3>'+
                    '<img src='+image+ 'width="200" height="200"'+'>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        );  
    }
    $("#myModal").modal("show");
});