1.  El portal de dadesobertes.gencat.cat ofereix un catàleg de datasets per informació de tota mena basada en l'activitat a Catalunya.
2.  CORS (Cross Origin Resouce Sharing) és un mecanisme que permet al navegadors solicitar recursos entre dominis. Serveix per evitar
    que llocs web maliciosos consumeixin dades a altres dominis.
    Per no trbar-se amb errors de CORS en aquest mateix exercici, primer s'ah d'executar un servidor de Node que fará de proxy, i l anostra aplicació client
    fará la petiicó al servidor Node.

    npm init -y && npm install express node-fetch && node servidor_node.js