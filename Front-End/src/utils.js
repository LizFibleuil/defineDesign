export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2],
        verb: request[3],
    };
};
/* Show Message on Screen */
export const showMessage = (message, callback) => {
    document.getElementById('message-overlay').innerHTML = `
      <div>
        <div id='message-overlay-content' class='message-text'>${message}</div>
        <button class='submit-btn' id='message-overlay-close-button'>Ok</button>
      </div>`;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-overlay-close-button').addEventListener('click', () => {
      document.getElementById('message-overlay').classList.remove('active');
      if (callback) {
        callback();
      }
    });
  };
  export const showConfirmMessage = (message, callback) => {
    document.getElementById('message-overlay').innerHTML = `
      <div>
        <div id='message-overlay-content' class='message-text'>${message}</div>
        <button class='submit-btn' id='message-overlay-close-button-okay'>That's Okay</button>
        <button class='submit-btn' id='message-overlay-close-button-check'>Let me check again</button>
      </div>`;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-overlay-close-button-okay').addEventListener('click', () => {
      document.getElementById('message-overlay').classList.remove('active');
      if (callback) {
        callback();
      }
    });
    document.getElementById('message-overlay-close-button-check').addEventListener('click', () => {
        document.getElementById('message-overlay').classList.remove('active');
        /* if (callback) {
          callback();
        } */
      });
  };
