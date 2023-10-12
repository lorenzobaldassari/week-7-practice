const loadPrimary = document.getElementById(`load-primary`);
const loadSecondary = document.getElementById(`load-secondary`);
const rowPosition = document.getElementById(`row-position`);

const getEvents = function () {
  fetch(`https://api.pexels.com/v1/search?query=gaming`, {
    headers: {
      Authorization: "4LMZwbil4H4c5jbRMAhbdxixjSivtv8aTFhwwbIS6hskkwY5CFrvU9mW",
    },
  })
    .then((res) => {
      console.log(`response ottenutas dalla get` + res);
      if (res.ok) {
        return res.json();
      } else {
        throw new err();
      }
    })

    .then((events) => {
      console.log(`events`, events);

      const a = [];
      for (i = 0; i < 15; i++) {
        a.push(events.photos[i].src.landscape);
      }
    
      loadPrimary.addEventListener(`click`, function () {
       

      
    })

    .catch((err) => {
        console.log(`si e verificato un errore`, err);
    });


getEvents();



const createImages= function(array){

    for (i = 0; i < 15; i++) {
        const col = document.createElement(`div`);
        col.classList.add(`col-md-4`);
        col.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img
              src="${array[i]}"
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
       `;
        console.log(rowPosition);
        console.log(col);
        rowPosition.appendChild(col)}}}
  
