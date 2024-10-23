function displayShowrooms() {
    let nationwideShowrooms = [];
    let showroomQS = '';
    var showroomCount = 1;
    var loc = 'https://www.londonstone.co.uk/show-showrooms/?showrooms=barnsley,birmingham,bristol';
    if (loc.indexOf('showrooms') !== -1) {
    showroomQS = loc.split('showrooms=')[1];
    nationwideShowrooms = showroomQS.split(',');
    nationwideShowrooms.forEach(function(showroom) {
    const insertElement = document.getElementById('contentArea');
    const divEl = document.createElement('div');
    const spanEl = document.createElement('span');
    spanEl.innerHTML = '(' + showroomCount + '). ';
    divEl.append(spanEl);
    //spanEl = document.createElement('span');
    spanEl.innerHTML = '(' + showroomCount + '). ' + showroom.charAt(0).toUpperCase() +
    showroom.slice(1);
    divEl.append(spanEl);
    insertElement.append(divEl);
    showroomCount = showroomCount + 1;
    });
    }
    }
    displayShowrooms();
    