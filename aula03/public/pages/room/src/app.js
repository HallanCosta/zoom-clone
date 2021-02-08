const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  const peerConfig = Object.values({
    id: undefined,
    config: {
      port: 9000,
      host: 'localhost',
      path: '/'
    }
  });
  const peerBuilder = new PeerBuilder({peerConfig}); 

  const socketUrl = 'http://localhost:3000';
  const socketBuilder = new SocketBuilder({ socketUrl });
  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps);

  // view.renderVideo({ userId: 'teste01', url: 'https://media.giphy.com/media/NFbjUcDsjUUms/giphy.mp4' });
  // view.renderVideo({ userId: 'teste02', isCurrentId: true, url: 'https://media.giphy.com/media/NFbjUcDsjUUms/giphy.mp4' });
  // view.renderVideo({ userId: 'teste03', isCurrentId: true, url: 'https://media.giphy.com/media/NFbjUcDsjUUms/giphy.mp4' });

}

window.onload = onload