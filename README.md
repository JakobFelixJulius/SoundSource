# SoundSource
Dies ist ein Projekt im Rahmen des Kurses "Mobile Systeme" des Studiengangs Media Systems an der HAW Hamburg.

Bei dem Projekt "SoundSource" handelt es sich um eine auf mobile Systeme ausgelegte WebApp zur Lokalisierung von Audioquellen im Raum.

Hierbei wird über das Eingangssignal des Mikrofons ein Dezibelmesser ausgegeben. 
Dieser ist verbunden mit einer zeitbasierten Anzeige in Kreisform, welche auf die Rotation des Gerätes zugreift und die Lautstärken um den Nutzer herum aufzeichnet, wenn sich dieser im Kreis dreht.
Ein Pfeil zeigt dabei stets die Anzeigerichtung der höchsten gemessenen Lautstärke an.
Somit wird der Nutzer durch Bewegung im Raum zielgerichtet zur Quelle des lautesten Geräusches geführt.

Live: http://tiny.cc/SoundSource

Developed by Jakob Sudau

Tested on: 
- Chrome for Mac (28.6.2015 working)
- Firefox for Android (5.0 or newer, 28.6.2015 working)

Note:
- iOS Safari Browser is currently not supporting WebAudio or the getUserMedia() microphone access (28.6.2015)
- Chrome for Android Browser is currenty experiencing troubles with the deviceOrientations alpha value (uneven distribution of values, 28.6.2015)
