var issues=[];
var issue,issueID,issueDesc,issueSeverity,issueAssigned,issueStatus;
var newarr;
function saveIssue(e)
{
   event.preventDefault();
   issueID = chance.guid();
   issueDesc=document.getElementById("issueDescInput").value;
   issueSeverity=document.getElementById("issueSeverityInput").value;
   issueAssigned=document.getElementById("issueAssignedToInput").value;
   issueStatus="Open";
   issue=
    {
      id:issueID,
      description:issueDesc,
      severity:issueSeverity,
      assigned:issueAssigned,
      status:issueStatus
    };
issues.push(issue);
console.log(issues);
fetchIssues();
}

function fetchIssues() {
  var list=document.getElementById("issuesList");
  list.innerHTML="";

for (var i = 0; i < issues.length; i++) {
var id = issues[i].id;
var desc = issues[i].description;
var severity = issues[i].severity;
var assignedTo = issues[i].assigned;
var status = issues[i].status;  //to pass arguments here for a function see this setStatusClosed
list.innerHTML += '<div class="well">'+'<h6>Issue ID: ' + id + '</h6>'+'<span style="background-color: green" class="badge badge-primary">' +status + '</span>'+'<h3>' + desc + '</h3>'+'<p><i class="fas fa-clock"></i>'+'  '+ severity + '&nbsp ' +'<i class="fas fa-user"></i>'+'  '+ assignedTo + '</p>'+ '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' +id+'\')">Close</a> '+ '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' +id+'\')">Delete<a>'+'</div>';

}
}
function setStatusClosed(id){
  for(var i=0;i<issues.length;i++)
  {
    if(issues[i].id===id)
           issues[i].status="Closed";
  }
  fetchIssues();
}

function deleteIssue(id){
  for (var i = 0; i < issues.length; i++)
   {
    if(issues[i].id===id)
    {
      issues.splice(i,1);
    }
  }
fetchIssues();
}
