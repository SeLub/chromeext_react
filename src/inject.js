
import io  from 'socket.io-client';


const initColor = () => {
      console.log('Injected !!!!!!!!!');

            /* Connects to the socket server */
            const socket = io.connect('http://localhost:3005');
            socket.on('connect', function() {
            console.log('Client connected');
            });


      socket.emit('call', 'math.add', { a: 123, b: 456 },
      function(err, res) {
        if (err) {
          console.error(err)
        } else {
          console.log('call success:', res)
        }
      });
}
export default  initColor;