(function()
{
    var app=angular.module('squares',[]);   
    app.controller('containerController', function() {
        this.rows=[
            [
                {}
            ]
        ];
        this.indexColumn=0;
        this.indexRow=0;
        var columnButton=document.querySelector('.field__button-remove-column');
        var rowButton=document.querySelector('.field__button-remove-row');

        this.addRow=function(){
            this.rows.push(angular.copy(this.rows[0]));
        };
        this.addColumn=function() {
            for (var i=0;i<this.rows.length;i++)
                this.rows[i].push({});
        };
        this.cellMouseOver=function($event,indRow,indCol) {
            columnButton.style.left=$event.target.offsetLeft+"px";
            rowButton.style.top = $event.target.offsetTop+"px";
            this.indexRow=indRow;
            this.indexColumn=indCol;
        };
        this.removeRow=function(){
            this.rows.splice(this.indexRow,1);
        };
        this.removeColumn=function(){
            for (var i=0;i<this.rows.length;i++)
                this.rows[i].splice(this.indexColumn,1);

        };
    });
})();