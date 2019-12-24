/*

!godds - senha para ganhar admin
!clear - apagar os banimentos da sala
!sair - sair da sala
!mute - mutar alguem
!unmute - desmutar alguem
!rr - parar a partida e começar de novo
!discord - envia o discord do servidor
!dd - envia o site do servidor
ffgg - envia o servidor mas com a mensagem escondida
!desbugar - desbuga o servidor
!abuser - denunciar um admin
!ibe1 - mapa de ice 1
!ibe2 - mapa de ice 2
!afk - ficar afk/online
oe - envia uma mensagem padrao
noob - envia uma mensagem padrao
mds - envia uma mensagem padrao
!mapas - envia todos os mapas que tem do ice
!ajuda - envia todos os comandos
!frases - envia todas as frases colocadas no ff=!


*/


var ibe1 = '{"name":"Enormous Space Iceball by Sand from HaxMaps","width":1500,"height":1000,"spawnDistance":350,"bg":{"type":"hockey","width":1200,"height":600,"kickOffRadius":220,"cornerRadius":0},"vertexes":[{"x":-1200,"y":600,"trait":"ballArea"},{"x":-1200,"y":110,"trait":"ballArea"},{"x":-1200,"y":-110,"trait":"ballArea"},{"x":-1200,"y":-600,"trait":"ballArea"},{"x":1200,"y":600,"trait":"ballArea"},{"x":1200,"y":110,"trait":"ballArea"},{"x":1200,"y":-110,"trait":"ballArea"},{"x":1200,"y":-600,"trait":"ballArea"},{"x":0,"y":750,"trait":"kickOffBarrier"},{"x":0,"y":220,"trait":"kickOffBarrier"},{"x":0,"y":-220,"trait":"kickOffBarrier"},{"x":0,"y":-750,"trait":"kickOffBarrier"},{"x":1200,"y":350,"trait":"line","color":"00CCCC"},{"x":750,"y":350,"trait":"line","color":"00CCCC"},{"x":1200,"y":-350,"trait":"line","color":"00CCCC"},{"x":750,"y":-350,"trait":"line","color":"00CCCC"},{"x":1200,"y":200,"trait":"line","color":"00CCCC"},{"x":1000,"y":200,"trait":"line","color":"00CCCC"},{"x":1200,"y":-200,"trait":"line","color":"00CCCC"},{"x":1000,"y":-200,"trait":"line","color":"00CCCC"},{"x":750,"y":-190,"trait":"line","color":"00CCCC"},{"x":750,"y":190,"trait":"line","color":"00CCCC"},{"x":-1200,"y":-350,"trait":"line","color":"00CCCC"},{"x":-750,"y":-350,"trait":"line","color":"00CCCC"},{"x":-1200,"y":350,"trait":"line","color":"00CCCC"},{"x":-750,"y":350,"trait":"line","color":"00CCCC"},{"x":-1200,"y":-200,"trait":"line","color":"00CCCC"},{"x":-1000,"y":-200,"trait":"line","color":"00CCCC"},{"x":-1200,"y":200,"trait":"line","color":"00CCCC"},{"x":-1000,"y":200,"trait":"line","color":"00CCCC"},{"x":-750,"y":190,"trait":"line","color":"00CCCC"},{"x":-750,"y":-190,"trait":"line","color":"00CCCC"},{"x":875,"y":4,"trait":"line"},{"x":875,"y":-4,"trait":"line"},{"x":-875,"y":4,"trait":"line"},{"x":-875,"y":-4,"trait":"line"},{"x":-1200,"y":575,"trait":"line","color":"00CCCC"},{"x":-1175,"y":600,"trait":"line","color":"00CCCC"},{"x":-1175,"y":-600,"trait":"line","color":"00CCCC"},{"x":-1200,"y":-575,"trait":"line","color":"00CCCC"},{"x":1175,"y":600,"trait":"line","color":"00CCCC"},{"x":1200,"y":575,"trait":"line","color":"00CCCC"},{"x":1200,"y":-575,"trait":"line","color":"00CCCC"},{"x":1175,"y":-600,"trait":"line","color":"00CCCC"},{"x":-1200,"y":112,"trait":"line","color":"000033"},{"x":-1250,"y":110,"trait":"line","color":"000033"},{"x":-1200,"y":-112,"trait":"line","color":"000033"},{"x":-1250,"y":-110,"trait":"line","color":"000033"},{"x":1200,"y":112,"trait":"line","color":"000033"},{"x":1250,"y":110,"trait":"line","color":"000033"},{"x":1200,"y":-112,"trait":"line","color":"000033"},{"x":1250,"y":-110,"trait":"line","color":"000033"},{"x":0,"y":-4,"trait":"line"},{"x":0,"y":4,"trait":"line"},{"x":0,"y":-4,"trait":"line"},{"x":0,"y":4,"trait":"line"},{"x":-1250,"y":110,"trait":"line","color":"000033"},{"x":-1300,"y":150,"trait":"line","color":"000033"},{"x":-1250,"y":-110,"trait":"line","color":"000033"},{"x":-1300,"y":-150,"trait":"line","color":"000033"},{"x":1250,"y":110,"trait":"line","color":"000033"},{"x":1300,"y":150,"trait":"line","color":"000033"},{"x":1250,"y":-110,"trait":"line","color":"000033"},{"x":1300,"y":-150,"trait":"line","color":"000033"},{"x":-70,"y":700,"trait":"line"},{"x":-70,"y":800,"trait":"line"},{"x":70,"y":700,"trait":"line"},{"x":70,"y":800,"trait":"line"},{"x":-80,"y":700,"trait":"line"},{"x":-80,"y":800,"trait":"line"},{"x":80,"y":700,"trait":"line"},{"x":80,"y":800,"trait":"line"},{"x":-70,"y":700,"trait":"line"},{"x":-80,"y":700,"trait":"line"},{"x":70,"y":700,"trait":"line"},{"x":80,"y":700,"trait":"line"},{"x":-90,"y":710,"trait":"line"},{"x":-90,"y":800,"trait":"line"},{"x":-500,"y":710,"trait":"line"},{"x":-500,"y":800,"trait":"line"},{"x":90,"y":710,"trait":"line"},{"x":90,"y":800,"trait":"line"},{"x":500,"y":710,"trait":"line"},{"x":500,"y":800,"trait":"line"},{"x":-90,"y":700,"trait":"line"},{"x":-90,"y":690,"trait":"line"},{"x":-90,"y":680,"trait":"line"},{"x":-90,"y":670,"trait":"line"},{"x":-90,"y":660,"trait":"line"},{"x":-90,"y":650,"trait":"line"},{"x":-90,"y":640,"trait":"line"},{"x":-90,"y":630,"trait":"line"},{"x":-500,"y":700,"trait":"line"},{"x":-500,"y":690,"trait":"line"},{"x":-500,"y":680,"trait":"line"},{"x":-500,"y":670,"trait":"line"},{"x":-500,"y":660,"trait":"line"},{"x":-500,"y":650,"trait":"line"},{"x":-500,"y":640,"trait":"line"},{"x":-500,"y":630,"trait":"line"},{"x":-500,"y":630,"trait":"line"},{"x":-490,"y":630,"trait":"line"},{"x":-480,"y":630,"trait":"line"},{"x":-470,"y":630,"trait":"line"},{"x":-460,"y":630,"trait":"line"},{"x":-450,"y":630,"trait":"line"},{"x":-440,"y":630,"trait":"line"},{"x":-430,"y":630,"trait":"line"},{"x":-420,"y":630,"trait":"line"},{"x":-410,"y":630,"trait":"line"},{"x":-400,"y":630,"trait":"line"},{"x":-390,"y":630,"trait":"line"},{"x":-380,"y":630,"trait":"line"},{"x":-370,"y":630,"trait":"line"},{"x":-360,"y":630,"trait":"line"},{"x":-350,"y":630,"trait":"line"},{"x":-340,"y":630,"trait":"line"},{"x":-330,"y":630,"trait":"line"},{"x":-320,"y":630,"trait":"line"},{"x":-310,"y":630,"trait":"line"},{"x":-300,"y":630,"trait":"line"},{"x":-290,"y":630,"trait":"line"},{"x":-280,"y":630,"trait":"line"},{"x":-270,"y":630,"trait":"line"},{"x":-260,"y":630,"trait":"line"},{"x":-250,"y":630,"trait":"line"},{"x":-240,"y":630,"trait":"line"},{"x":-230,"y":630,"trait":"line"},{"x":-220,"y":630,"trait":"line"},{"x":-210,"y":630,"trait":"line"},{"x":-200,"y":630,"trait":"line"},{"x":-190,"y":630,"trait":"line"},{"x":-180,"y":630,"trait":"line"},{"x":-170,"y":630,"trait":"line"},{"x":-160,"y":630,"trait":"line"},{"x":-150,"y":630,"trait":"line"},{"x":-140,"y":630,"trait":"line"},{"x":-130,"y":630,"trait":"line"},{"x":-120,"y":630,"trait":"line"},{"x":-110,"y":630,"trait":"line"},{"x":-100,"y":630,"trait":"line"},{"x":-90,"y":630,"trait":"line"},{"x":90,"y":700,"trait":"line"},{"x":90,"y":690,"trait":"line"},{"x":90,"y":680,"trait":"line"},{"x":90,"y":670,"trait":"line"},{"x":90,"y":660,"trait":"line"},{"x":90,"y":650,"trait":"line"},{"x":90,"y":640,"trait":"line"},{"x":90,"y":630,"trait":"line"},{"x":500,"y":700,"trait":"line"},{"x":500,"y":690,"trait":"line"},{"x":500,"y":680,"trait":"line"},{"x":500,"y":670,"trait":"line"},{"x":500,"y":660,"trait":"line"},{"x":500,"y":650,"trait":"line"},{"x":500,"y":640,"trait":"line"},{"x":500,"y":630,"trait":"line"},{"x":500,"y":630,"trait":"line"},{"x":490,"y":630,"trait":"line"},{"x":480,"y":630,"trait":"line"},{"x":470,"y":630,"trait":"line"},{"x":460,"y":630,"trait":"line"},{"x":450,"y":630,"trait":"line"},{"x":440,"y":630,"trait":"line"},{"x":430,"y":630,"trait":"line"},{"x":420,"y":630,"trait":"line"},{"x":410,"y":630,"trait":"line"},{"x":400,"y":630,"trait":"line"},{"x":390,"y":630,"trait":"line"},{"x":380,"y":630,"trait":"line"},{"x":370,"y":630,"trait":"line"},{"x":360,"y":630,"trait":"line"},{"x":350,"y":630,"trait":"line"},{"x":340,"y":630,"trait":"line"},{"x":330,"y":630,"trait":"line"},{"x":320,"y":630,"trait":"line"},{"x":310,"y":630,"trait":"line"},{"x":300,"y":630,"trait":"line"},{"x":290,"y":630,"trait":"line"},{"x":280,"y":630,"trait":"line"},{"x":270,"y":630,"trait":"line"},{"x":260,"y":630,"trait":"line"},{"x":250,"y":630,"trait":"line"},{"x":240,"y":630,"trait":"line"},{"x":230,"y":630,"trait":"line"},{"x":220,"y":630,"trait":"line"},{"x":210,"y":630,"trait":"line"},{"x":200,"y":630,"trait":"line"},{"x":190,"y":630,"trait":"line"},{"x":180,"y":630,"trait":"line"},{"x":170,"y":630,"trait":"line"},{"x":160,"y":630,"trait":"line"},{"x":150,"y":630,"trait":"line"},{"x":140,"y":630,"trait":"line"},{"x":130,"y":630,"trait":"line"},{"x":120,"y":630,"trait":"line"},{"x":110,"y":630,"trait":"line"},{"x":100,"y":630,"trait":"line"},{"x":90,"y":630,"trait":"line"},{"x":0,"y":-610,"trait":"line"},{"x":0,"y":-630,"trait":"line"},{"x":0,"y":-610,"trait":"line"},{"x":0,"y":-630,"trait":"line"},{"x":-12,"y":-610,"trait":"line"},{"x":-12,"y":-630,"trait":"line"},{"x":-25,"y":-610,"trait":"line"},{"x":-12,"y":-620,"trait":"line"},{"x":-25,"y":-630,"trait":"line"},{"x":12,"y":-610,"trait":"line"},{"x":12,"y":-630,"trait":"line"},{"x":25,"y":-610,"trait":"line"},{"x":12,"y":-620,"trait":"line"},{"x":25,"y":-630,"trait":"line"},{"x":0,"y":610,"trait":"line"},{"x":0,"y":630,"trait":"line"},{"x":0,"y":610,"trait":"line"},{"x":0,"y":630,"trait":"line"},{"x":-12,"y":610,"trait":"line"},{"x":-12,"y":630,"trait":"line"},{"x":-25,"y":610,"trait":"line"},{"x":-12,"y":620,"trait":"line"},{"x":-25,"y":630,"trait":"line"},{"x":12,"y":610,"trait":"line"},{"x":12,"y":630,"trait":"line"},{"x":25,"y":610,"trait":"line"},{"x":12,"y":620,"trait":"line"},{"x":25,"y":630,"trait":"line"},{"x":-2,"y":-640,"trait":"line"},{"x":-1,"y":-640,"trait":"line"},{"x":-2,"y":650,"trait":"line"},{"x":-1,"y":650,"trait":"line"},{"x":-8,"y":-640,"trait":"line"},{"x":-8,"y":-650,"trait":"line"},{"x":-8,"y":640,"trait":"line"},{"x":-8,"y":650,"trait":"line"},{"x":8,"y":-640,"trait":"line"},{"x":8,"y":-650,"trait":"line"},{"x":8,"y":640,"trait":"line"},{"x":8,"y":650,"trait":"line"},{"x":4,"y":-643,"trait":"line"},{"x":11,"y":-643,"trait":"line"},{"x":4,"y":647,"trait":"line"},{"x":11,"y":647,"trait":"line"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":45,"v1":47,"trait":"reargoalNetleft","color":"000033"},{"v0":49,"v1":51,"trait":"reargoalNetright","color":"000033"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":12,"v1":13,"trait":"line","color":"00CCCC"},{"v0":13,"v1":15,"trait":"line","color":"00CCCC"},{"v0":14,"v1":15,"trait":"line","color":"00CCCC"},{"v0":16,"v1":17,"trait":"line","color":"00CCCC"},{"v0":17,"v1":19,"trait":"line","color":"00CCCC"},{"v0":18,"v1":19,"trait":"line","color":"00CCCC"},{"v0":20,"v1":21,"trait":"line","curve":-150,"color":"00CCCC"},{"v0":22,"v1":23,"trait":"line","color":"00CCCC"},{"v0":23,"v1":25,"trait":"line","color":"00CCCC"},{"v0":24,"v1":25,"trait":"line","color":"00CCCC"},{"v0":26,"v1":27,"trait":"line","color":"00CCCC"},{"v0":27,"v1":29,"trait":"line","color":"00CCCC"},{"v0":28,"v1":29,"trait":"line","color":"00CCCC"},{"v0":30,"v1":31,"trait":"line","curve":-150,"color":"00CCCC"},{"v0":32,"v1":33,"trait":"line","curve":-180},{"v0":34,"v1":35,"trait":"line","curve":-180},{"v0":32,"v1":33,"trait":"line","curve":180},{"v0":34,"v1":35,"trait":"line","curve":180},{"v0":32,"v1":33,"trait":"line","curve":90},{"v0":34,"v1":35,"trait":"line","curve":90},{"v0":32,"v1":33,"trait":"line","curve":-90},{"v0":34,"v1":35,"trait":"line","curve":-90},{"v0":32,"v1":33,"trait":"line"},{"v0":34,"v1":35,"trait":"line"},{"v0":36,"v1":37,"trait":"line","curve":90,"color":"00CCCC"},{"v0":38,"v1":39,"trait":"line","curve":90,"color":"00CCCC"},{"v0":40,"v1":41,"trait":"line","curve":90,"color":"00CCCC"},{"v0":42,"v1":43,"trait":"line","curve":90,"color":"00CCCC"},{"v0":44,"v1":45,"trait":"sidegoalNet","curve":5,"color":"000033"},{"v0":46,"v1":47,"trait":"sidegoalNet","curve":-5,"color":"000033"},{"v0":48,"v1":49,"trait":"sidegoalNet","curve":-5,"color":"000033"},{"v0":50,"v1":51,"trait":"sidegoalNet","curve":5,"color":"000033"},{"v0":52,"v1":53,"trait":"line","curve":-180},{"v0":54,"v1":55,"trait":"line","curve":180},{"v0":52,"v1":53,"trait":"line","curve":-90},{"v0":54,"v1":55,"trait":"line","curve":90},{"v0":56,"v1":57,"trait":"line","color":"000033"},{"v0":58,"v1":59,"trait":"line","color":"000033"},{"v0":60,"v1":61,"trait":"line","color":"000033"},{"v0":62,"v1":63,"trait":"line","color":"000033"},{"v0":64,"v1":65,"trait":"tunnel"},{"v0":66,"v1":67,"trait":"tunnel"},{"v0":68,"v1":69,"trait":"tunnel"},{"v0":70,"v1":71,"trait":"tunnel"},{"v0":72,"v1":73,"trait":"tunnel","curve":-180},{"v0":74,"v1":75,"trait":"tunnel","curve":180},{"v0":76,"v1":77,"trait":"teambench"},{"v0":78,"v1":79,"trait":"teambench"},{"v0":76,"v1":78,"trait":"teambench"},{"v0":80,"v1":81,"trait":"teambench"},{"v0":82,"v1":83,"trait":"teambench"},{"v0":80,"v1":82,"trait":"teambench"},{"v0":84,"v1":85,"trait":"line"},{"v0":86,"v1":87,"trait":"line"},{"v0":88,"v1":89,"trait":"line"},{"v0":90,"v1":91,"trait":"line"},{"v0":92,"v1":93,"trait":"line"},{"v0":94,"v1":95,"trait":"line"},{"v0":96,"v1":97,"trait":"line"},{"v0":98,"v1":99,"trait":"line"},{"v0":100,"v1":101,"trait":"line"},{"v0":102,"v1":103,"trait":"line"},{"v0":104,"v1":105,"trait":"line"},{"v0":106,"v1":107,"trait":"line"},{"v0":108,"v1":109,"trait":"line"},{"v0":110,"v1":111,"trait":"line"},{"v0":112,"v1":113,"trait":"line"},{"v0":114,"v1":115,"trait":"line"},{"v0":116,"v1":117,"trait":"line"},{"v0":118,"v1":119,"trait":"line"},{"v0":120,"v1":121,"trait":"line"},{"v0":122,"v1":123,"trait":"line"},{"v0":124,"v1":125,"trait":"line"},{"v0":126,"v1":127,"trait":"line"},{"v0":128,"v1":129,"trait":"line"},{"v0":130,"v1":131,"trait":"line"},{"v0":132,"v1":133,"trait":"line"},{"v0":134,"v1":135,"trait":"line"},{"v0":136,"v1":137,"trait":"line"},{"v0":138,"v1":139,"trait":"line"},{"v0":140,"v1":141,"trait":"line"},{"v0":142,"v1":143,"trait":"line"},{"v0":144,"v1":145,"trait":"line"},{"v0":146,"v1":147,"trait":"line"},{"v0":148,"v1":149,"trait":"line"},{"v0":150,"v1":151,"trait":"line"},{"v0":152,"v1":153,"trait":"line"},{"v0":154,"v1":155,"trait":"line"},{"v0":156,"v1":157,"trait":"line"},{"v0":158,"v1":159,"trait":"line"},{"v0":160,"v1":161,"trait":"line"},{"v0":162,"v1":163,"trait":"line"},{"v0":164,"v1":165,"trait":"line"},{"v0":166,"v1":167,"trait":"line"},{"v0":168,"v1":169,"trait":"line"},{"v0":170,"v1":171,"trait":"line"},{"v0":172,"v1":173,"trait":"line"},{"v0":174,"v1":175,"trait":"line"},{"v0":176,"v1":177,"trait":"line"},{"v0":178,"v1":179,"trait":"line"},{"v0":180,"v1":181,"trait":"line"},{"v0":182,"v1":183,"trait":"line"},{"v0":184,"v1":185,"trait":"line"},{"v0":186,"v1":187,"trait":"line"},{"v0":188,"v1":189,"trait":"line"},{"v0":190,"v1":191,"trait":"line"},{"v0":192,"v1":193,"trait":"line"},{"v0":194,"v1":195,"trait":"line"},{"v0":196,"v1":197,"trait":"line"},{"v0":198,"v1":199,"trait":"line"},{"v0":200,"v1":201,"trait":"line","curve":180},{"v0":202,"v1":203,"trait":"line","curve":-180},{"v0":204,"v1":205,"trait":"line"},{"v0":206,"v1":207,"trait":"line"},{"v0":207,"v1":208,"trait":"line"},{"v0":209,"v1":210,"trait":"line"},{"v0":211,"v1":212,"trait":"line"},{"v0":212,"v1":213,"trait":"line"},{"v0":214,"v1":215,"trait":"line","curve":180},{"v0":216,"v1":217,"trait":"line","curve":-180},{"v0":218,"v1":219,"trait":"line"},{"v0":220,"v1":221,"trait":"line"},{"v0":221,"v1":222,"trait":"line"},{"v0":223,"v1":224,"trait":"line"},{"v0":225,"v1":226,"trait":"line"},{"v0":226,"v1":227,"trait":"line"},{"v0":228,"v1":229,"trait":"line"},{"v0":230,"v1":231,"trait":"line"},{"v0":232,"v1":233,"trait":"line"},{"v0":234,"v1":235,"trait":"line"},{"v0":236,"v1":237,"trait":"line"},{"v0":238,"v1":239,"trait":"line"},{"v0":237,"v1":240,"trait":"line"},{"v0":240,"v1":241,"trait":"line"},{"v0":238,"v1":242,"trait":"line"},{"v0":242,"v1":243,"trait":"line"}],"goals":[{"p0":[-1200,-110],"p1":[-1200,110],"team":"red"},{"p0":[1200,110],"p1":[1200,-110],"team":"blue"}],"discs":[{"pos":[-1200,110],"trait":"goalPost","color":"00FF66"},{"pos":[-1200,-110],"trait":"goalPost","color":"00FF66"},{"pos":[1200,110],"trait":"goalPost","color":"00FF66"},{"pos":[1200,-110],"trait":"goalPost","color":"00FF66"},{"pos":[-1300,150],"trait":"stanchion","color":"00FF66"},{"pos":[-1300,-150],"trait":"stanchion","color":"00FF66"},{"pos":[1300,150],"trait":"stanchion","color":"00FF66"},{"pos":[1300,-150],"trait":"stanchion","color":"00FF66"},{"pos":[-1200,-600],"trait":"cornerflag"},{"pos":[-1200,600],"trait":"cornerflag"},{"pos":[1200,-600],"trait":"cornerflag"},{"pos":[1200,600],"trait":"cornerflag"},{"pos":[-115,720],"trait":"manager"},{"pos":[-155,720],"trait":"manager"},{"pos":[-195,720],"trait":"physio"},{"pos":[115,720],"trait":"manager"},{"pos":[155,720],"trait":"manager"},{"pos":[195,720],"trait":"physio"},{"pos":[-235,720],"trait":"redsubs"},{"pos":[-275,720],"trait":"redsubs"},{"pos":[-315,720],"trait":"redsubs"},{"pos":[-355,720],"trait":"redsubs"},{"pos":[-395,720],"trait":"redsubs"},{"pos":[-435,720],"trait":"redsubs"},{"pos":[-475,720],"trait":"redsubs"},{"pos":[235,720],"trait":"bluesubs"},{"pos":[275,720],"trait":"bluesubs"},{"pos":[315,720],"trait":"bluesubs"},{"pos":[355,720],"trait":"bluesubs"},{"pos":[395,720],"trait":"bluesubs"},{"pos":[435,720],"trait":"bluesubs"},{"pos":[475,720],"trait":"bluesubs"}],"planes":[{"normal":[0,1],"dist":-600,"trait":"ballArea"},{"normal":[0,-1],"dist":-600,"trait":"ballArea"},{"normal":[0,1],"dist":-750,"bCoef":0.1},{"normal":[0,-1],"dist":-750,"bCoef":0.1},{"normal":[1,0],"dist":-1350,"bCoef":0.1},{"normal":[-1,0],"dist":-1350,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1.5,"cMask":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":2},"stanchion":{"radius":3,"invMass":0,"bCoef":3},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.5,"color":"FFFF00","cGroup":[]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"},"tunnel":{"vis":true,"cMask":["red","blue"],"color":"000000"},"advertising":{"vis":true,"cMask":["red","blue"],"color":"333333"},"teambench":{"vis":true,"cMask":[],"color":"000000"},"manager":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"333333"},"physio":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"666666"},"redsubs":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"E56E56"},"bluesubs":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"5689E5"}},"ballPhysics":{"damping":1,"color":"CCFF33"},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.9995}}'
var ibe2 = '{"name":"Enormous Space Iceball | Leo","width":1500,"height":1000,"bg":{"type":"hockey","width":1200,"height":600,"kickOffRadius":220},"vertexes":[{"x":-1200,"y":600,"bCoef":1.5,"cMask":["ball"]},{"x":-1200,"y":110,"bCoef":1.5,"cMask":["ball"]},{"x":-1200,"y":-110,"bCoef":1.5,"cMask":["ball"]},{"x":-1200,"y":-600,"bCoef":1.5,"cMask":["ball"]},{"x":1200,"y":600,"bCoef":1.5,"cMask":["ball"]},{"x":1200,"y":110,"bCoef":1.5,"cMask":["ball"]},{"x":1200,"y":-110,"bCoef":1.5,"cMask":["ball"]},{"x":1200,"y":-600,"bCoef":1.5,"cMask":["ball"]},{"x":0,"y":750,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-750,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":1200,"y":350,"cMask":[]},{"x":750,"y":350,"cMask":[]},{"x":1200,"y":-350,"cMask":[]},{"x":750,"y":-350,"cMask":[]},{"x":1200,"y":200,"cMask":[]},{"x":1000,"y":200,"cMask":[]},{"x":1200,"y":-200,"cMask":[]},{"x":1000,"y":-200,"cMask":[]},{"x":750,"y":-190,"cMask":[]},{"x":750,"y":190,"cMask":[]},{"x":-1200,"y":-350,"cMask":[]},{"x":-750,"y":-350,"cMask":[]},{"x":-1200,"y":350,"cMask":[]},{"x":-750,"y":350,"cMask":[]},{"x":-1200,"y":-200,"cMask":[]},{"x":-1000,"y":-200,"cMask":[]},{"x":-1200,"y":200,"cMask":[]},{"x":-1000,"y":200,"cMask":[]},{"x":-750,"y":190,"cMask":[]},{"x":-750,"y":-190,"cMask":[]},{"x":875,"y":4,"cMask":[]},{"x":875,"y":-4,"cMask":[]},{"x":-875,"y":4,"cMask":[]},{"x":-875,"y":-4,"cMask":[]},{"x":-1200,"y":575,"cMask":[]},{"x":-1175,"y":600,"cMask":[]},{"x":-1175,"y":-600,"cMask":[]},{"x":-1200,"y":-575,"cMask":[]},{"x":1175,"y":600,"cMask":[]},{"x":1200,"y":575,"cMask":[]},{"x":1200,"y":-575,"cMask":[]},{"x":1175,"y":-600,"cMask":[]},{"x":-1200,"y":112,"cMask":[]},{"x":-1250,"y":110,"cMask":[]},{"x":-1200,"y":-112,"cMask":[]},{"x":-1250,"y":-110,"cMask":[]},{"x":1200,"y":112,"cMask":[]},{"x":1250,"y":110,"cMask":[]},{"x":1200,"y":-112,"cMask":[]},{"x":1250,"y":-110,"cMask":[]},{"x":0,"y":-4,"cMask":[]},{"x":0,"y":4,"cMask":[]},{"x":0,"y":-4,"cMask":[]},{"x":0,"y":4,"cMask":[]},{"x":-1250,"y":110,"cMask":[]},{"x":-1300,"y":150,"cMask":[]},{"x":-1250,"y":-110,"cMask":[]},{"x":-1300,"y":-150,"cMask":[]},{"x":1250,"y":110,"cMask":[]},{"x":1300,"y":150,"cMask":[]},{"x":1250,"y":-110,"cMask":[]},{"x":1300,"y":-150,"cMask":[]},{"x":-70,"y":700,"cMask":[]},{"x":-70,"y":800,"cMask":[]},{"x":70,"y":700,"cMask":[]},{"x":70,"y":800,"cMask":[]},{"x":-80,"y":700,"cMask":[]},{"x":-80,"y":800,"cMask":[]},{"x":80,"y":700,"cMask":[]},{"x":80,"y":800,"cMask":[]},{"x":-70,"y":700,"cMask":[]},{"x":-80,"y":700,"cMask":[]},{"x":70,"y":700,"cMask":[]},{"x":80,"y":700,"cMask":[]},{"x":-90,"y":710,"cMask":[]},{"x":-90,"y":800,"cMask":[]},{"x":-500,"y":710,"cMask":[]},{"x":-500,"y":800,"cMask":[]},{"x":90,"y":710,"cMask":[]},{"x":90,"y":800,"cMask":[]},{"x":500,"y":710,"cMask":[]},{"x":500,"y":800,"cMask":[]},{"x":-90,"y":700,"cMask":[]},{"x":-90,"y":690,"cMask":[]},{"x":-90,"y":680,"cMask":[]},{"x":-90,"y":670,"cMask":[]},{"x":-90,"y":660,"cMask":[]},{"x":-90,"y":650,"cMask":[]},{"x":-90,"y":640,"cMask":[]},{"x":-90,"y":630,"cMask":[]},{"x":-500,"y":700,"cMask":[]},{"x":-500,"y":690,"cMask":[]},{"x":-500,"y":680,"cMask":[]},{"x":-500,"y":670,"cMask":[]},{"x":-500,"y":660,"cMask":[]},{"x":-500,"y":650,"cMask":[]},{"x":-500,"y":640,"cMask":[]},{"x":-500,"y":630,"cMask":[]},{"x":-500,"y":630,"cMask":[]},{"x":-490,"y":630,"cMask":[]},{"x":-480,"y":630,"cMask":[]},{"x":-470,"y":630,"cMask":[]},{"x":-460,"y":630,"cMask":[]},{"x":-450,"y":630,"cMask":[]},{"x":-440,"y":630,"cMask":[]},{"x":-430,"y":630,"cMask":[]},{"x":-420,"y":630,"cMask":[]},{"x":-410,"y":630,"cMask":[]},{"x":-400,"y":630,"cMask":[]},{"x":-390,"y":630,"cMask":[]},{"x":-380,"y":630,"cMask":[]},{"x":-370,"y":630,"cMask":[]},{"x":-360,"y":630,"cMask":[]},{"x":-350,"y":630,"cMask":[]},{"x":-340,"y":630,"cMask":[]},{"x":-330,"y":630,"cMask":[]},{"x":-320,"y":630,"cMask":[]},{"x":-310,"y":630,"cMask":[]},{"x":-300,"y":630,"cMask":[]},{"x":-290,"y":630,"cMask":[]},{"x":-280,"y":630,"cMask":[]},{"x":-270,"y":630,"cMask":[]},{"x":-260,"y":630,"cMask":[]},{"x":-250,"y":630,"cMask":[]},{"x":-240,"y":630,"cMask":[]},{"x":-230,"y":630,"cMask":[]},{"x":-220,"y":630,"cMask":[]},{"x":-210,"y":630,"cMask":[]},{"x":-200,"y":630,"cMask":[]},{"x":-190,"y":630,"cMask":[]},{"x":-180,"y":630,"cMask":[]},{"x":-170,"y":630,"cMask":[]},{"x":-160,"y":630,"cMask":[]},{"x":-150,"y":630,"cMask":[]},{"x":-140,"y":630,"cMask":[]},{"x":-130,"y":630,"cMask":[]},{"x":-120,"y":630,"cMask":[]},{"x":-110,"y":630,"cMask":[]},{"x":-100,"y":630,"cMask":[]},{"x":-90,"y":630,"cMask":[]},{"x":90,"y":700,"cMask":[]},{"x":90,"y":690,"cMask":[]},{"x":90,"y":680,"cMask":[]},{"x":90,"y":670,"cMask":[]},{"x":90,"y":660,"cMask":[]},{"x":90,"y":650,"cMask":[]},{"x":90,"y":640,"cMask":[]},{"x":90,"y":630,"cMask":[]},{"x":500,"y":700,"cMask":[]},{"x":500,"y":690,"cMask":[]},{"x":500,"y":680,"cMask":[]},{"x":500,"y":670,"cMask":[]},{"x":500,"y":660,"cMask":[]},{"x":500,"y":650,"cMask":[]},{"x":500,"y":640,"cMask":[]},{"x":500,"y":630,"cMask":[]},{"x":500,"y":630,"cMask":[]},{"x":490,"y":630,"cMask":[]},{"x":480,"y":630,"cMask":[]},{"x":470,"y":630,"cMask":[]},{"x":460,"y":630,"cMask":[]},{"x":450,"y":630,"cMask":[]},{"x":440,"y":630,"cMask":[]},{"x":430,"y":630,"cMask":[]},{"x":420,"y":630,"cMask":[]},{"x":410,"y":630,"cMask":[]},{"x":400,"y":630,"cMask":[]},{"x":390,"y":630,"cMask":[]},{"x":380,"y":630,"cMask":[]},{"x":370,"y":630,"cMask":[]},{"x":360,"y":630,"cMask":[]},{"x":350,"y":630,"cMask":[]},{"x":340,"y":630,"cMask":[]},{"x":330,"y":630,"cMask":[]},{"x":320,"y":630,"cMask":[]},{"x":310,"y":630,"cMask":[]},{"x":300,"y":630,"cMask":[]},{"x":290,"y":630,"cMask":[]},{"x":280,"y":630,"cMask":[]},{"x":270,"y":630,"cMask":[]},{"x":260,"y":630,"cMask":[]},{"x":250,"y":630,"cMask":[]},{"x":240,"y":630,"cMask":[]},{"x":230,"y":630,"cMask":[]},{"x":220,"y":630,"cMask":[]},{"x":210,"y":630,"cMask":[]},{"x":200,"y":630,"cMask":[]},{"x":190,"y":630,"cMask":[]},{"x":180,"y":630,"cMask":[]},{"x":170,"y":630,"cMask":[]},{"x":160,"y":630,"cMask":[]},{"x":150,"y":630,"cMask":[]},{"x":140,"y":630,"cMask":[]},{"x":130,"y":630,"cMask":[]},{"x":120,"y":630,"cMask":[]},{"x":110,"y":630,"cMask":[]},{"x":100,"y":630,"cMask":[]},{"x":90,"y":630,"cMask":[]},{"x":0,"y":-610,"cMask":[]},{"x":0,"y":-630,"cMask":[]},{"x":0,"y":-610,"cMask":[]},{"x":0,"y":-630,"cMask":[]},{"x":-12,"y":-610,"cMask":[]},{"x":-12,"y":-630,"cMask":[]},{"x":-25,"y":-610,"cMask":[]},{"x":-12,"y":-620,"cMask":[]},{"x":-25,"y":-630,"cMask":[]},{"x":12,"y":-610,"cMask":[]},{"x":12,"y":-630,"cMask":[]},{"x":25,"y":-610,"cMask":[]},{"x":12,"y":-620,"cMask":[]},{"x":25,"y":-630,"cMask":[]},{"x":0,"y":610,"cMask":[]},{"x":0,"y":630,"cMask":[]},{"x":0,"y":610,"cMask":[]},{"x":0,"y":630,"cMask":[]},{"x":-12,"y":610,"cMask":[]},{"x":-12,"y":630,"cMask":[]},{"x":-25,"y":610,"cMask":[]},{"x":-12,"y":620,"cMask":[]},{"x":-25,"y":630,"cMask":[]},{"x":12,"y":610,"cMask":[]},{"x":12,"y":630,"cMask":[]},{"x":25,"y":610,"cMask":[]},{"x":12,"y":620,"cMask":[]},{"x":25,"y":630,"cMask":[]},{"x":-2,"y":-640,"cMask":[]},{"x":-1,"y":-640,"cMask":[]},{"x":-2,"y":650,"cMask":[]},{"x":-1,"y":650,"cMask":[]},{"x":-8,"y":-640,"cMask":[]},{"x":-8,"y":-650,"cMask":[]},{"x":-8,"y":640,"cMask":[]},{"x":-8,"y":650,"cMask":[]},{"x":8,"y":-640,"cMask":[]},{"x":8,"y":-650,"cMask":[]},{"x":8,"y":640,"cMask":[]},{"x":8,"y":650,"cMask":[]},{"x":4,"y":-643,"cMask":[]},{"x":11,"y":-643,"cMask":[]},{"x":4,"y":647,"cMask":[]},{"x":11,"y":647,"cMask":[]},{"x":0,"y":50000,"cMask":[]}],"segments":[{"v0":0,"v1":1,"bias":-150,"bCoef":1.5,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"bias":-150,"bCoef":1.5,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"bias":150,"bCoef":1.5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"bias":150,"bCoef":1.5,"vis":false,"cMask":["ball"]},{"v0":45,"v1":47,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red","blue","ball"],"color":"33"},{"v0":51,"v1":49,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red","blue","ball"],"color":"33"},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":13,"cMask":[],"color":"CCCC"},{"v0":13,"v1":15,"cMask":[],"color":"CCCC"},{"v0":14,"v1":15,"cMask":[],"color":"CCCC"},{"v0":16,"v1":17,"cMask":[],"color":"CCCC"},{"v0":17,"v1":19,"cMask":[],"color":"CCCC"},{"v0":18,"v1":19,"cMask":[],"color":"CCCC"},{"v0":21,"v1":20,"curve":150,"curveF":0.2679491924311227,"cMask":[],"color":"CCCC"},{"v0":22,"v1":23,"cMask":[],"color":"CCCC"},{"v0":23,"v1":25,"cMask":[],"color":"CCCC"},{"v0":24,"v1":25,"cMask":[],"color":"CCCC"},{"v0":26,"v1":27,"cMask":[],"color":"CCCC"},{"v0":27,"v1":29,"cMask":[],"color":"CCCC"},{"v0":28,"v1":29,"cMask":[],"color":"CCCC"},{"v0":31,"v1":30,"curve":150,"curveF":0.2679491924311227,"cMask":[],"color":"CCCC"},{"v0":33,"v1":32,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":35,"v1":34,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":32,"v1":33,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":34,"v1":35,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":32,"v1":33,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":34,"v1":35,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":33,"v1":32,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":35,"v1":34,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":32,"v1":33,"cMask":[],"color":"C7E6BD"},{"v0":34,"v1":35,"cMask":[],"color":"C7E6BD"},{"v0":36,"v1":37,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"CCCC"},{"v0":38,"v1":39,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"CCCC"},{"v0":40,"v1":41,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"CCCC"},{"v0":42,"v1":43,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"CCCC"},{"v0":44,"v1":45,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"33"},{"v0":47,"v1":46,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"33"},{"v0":49,"v1":48,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"33"},{"v0":50,"v1":51,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"33"},{"v0":53,"v1":52,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":54,"v1":55,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":53,"v1":52,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":54,"v1":55,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":56,"v1":57,"cMask":[],"color":"33"},{"v0":58,"v1":59,"cMask":[],"color":"33"},{"v0":60,"v1":61,"cMask":[],"color":"33"},{"v0":62,"v1":63,"cMask":[],"color":"33"},{"v0":64,"v1":65,"cMask":["red","blue"]},{"v0":66,"v1":67,"cMask":["red","blue"]},{"v0":68,"v1":69,"cMask":["red","blue"]},{"v0":70,"v1":71,"cMask":["red","blue"]},{"v0":73,"v1":72,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"]},{"v0":74,"v1":75,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"]},{"v0":76,"v1":77,"cMask":[]},{"v0":78,"v1":79,"cMask":[]},{"v0":76,"v1":78,"cMask":[]},{"v0":80,"v1":81,"cMask":[]},{"v0":82,"v1":83,"cMask":[]},{"v0":80,"v1":82,"cMask":[]},{"v0":84,"v1":85,"cMask":[],"color":"C7E6BD"},{"v0":86,"v1":87,"cMask":[],"color":"C7E6BD"},{"v0":88,"v1":89,"cMask":[],"color":"C7E6BD"},{"v0":90,"v1":91,"cMask":[],"color":"C7E6BD"},{"v0":92,"v1":93,"cMask":[],"color":"C7E6BD"},{"v0":94,"v1":95,"cMask":[],"color":"C7E6BD"},{"v0":96,"v1":97,"cMask":[],"color":"C7E6BD"},{"v0":98,"v1":99,"cMask":[],"color":"C7E6BD"},{"v0":100,"v1":101,"cMask":[],"color":"C7E6BD"},{"v0":102,"v1":103,"cMask":[],"color":"C7E6BD"},{"v0":104,"v1":105,"cMask":[],"color":"C7E6BD"},{"v0":106,"v1":107,"cMask":[],"color":"C7E6BD"},{"v0":108,"v1":109,"cMask":[],"color":"C7E6BD"},{"v0":110,"v1":111,"cMask":[],"color":"C7E6BD"},{"v0":112,"v1":113,"cMask":[],"color":"C7E6BD"},{"v0":114,"v1":115,"cMask":[],"color":"C7E6BD"},{"v0":116,"v1":117,"cMask":[],"color":"C7E6BD"},{"v0":118,"v1":119,"cMask":[],"color":"C7E6BD"},{"v0":120,"v1":121,"cMask":[],"color":"C7E6BD"},{"v0":122,"v1":123,"cMask":[],"color":"C7E6BD"},{"v0":124,"v1":125,"cMask":[],"color":"C7E6BD"},{"v0":126,"v1":127,"cMask":[],"color":"C7E6BD"},{"v0":128,"v1":129,"cMask":[],"color":"C7E6BD"},{"v0":130,"v1":131,"cMask":[],"color":"C7E6BD"},{"v0":132,"v1":133,"cMask":[],"color":"C7E6BD"},{"v0":134,"v1":135,"cMask":[],"color":"C7E6BD"},{"v0":136,"v1":137,"cMask":[],"color":"C7E6BD"},{"v0":138,"v1":139,"cMask":[],"color":"C7E6BD"},{"v0":140,"v1":141,"cMask":[],"color":"C7E6BD"},{"v0":142,"v1":143,"cMask":[],"color":"C7E6BD"},{"v0":144,"v1":145,"cMask":[],"color":"C7E6BD"},{"v0":146,"v1":147,"cMask":[],"color":"C7E6BD"},{"v0":148,"v1":149,"cMask":[],"color":"C7E6BD"},{"v0":150,"v1":151,"cMask":[],"color":"C7E6BD"},{"v0":152,"v1":153,"cMask":[],"color":"C7E6BD"},{"v0":154,"v1":155,"cMask":[],"color":"C7E6BD"},{"v0":156,"v1":157,"cMask":[],"color":"C7E6BD"},{"v0":158,"v1":159,"cMask":[],"color":"C7E6BD"},{"v0":160,"v1":161,"cMask":[],"color":"C7E6BD"},{"v0":162,"v1":163,"cMask":[],"color":"C7E6BD"},{"v0":164,"v1":165,"cMask":[],"color":"C7E6BD"},{"v0":166,"v1":167,"cMask":[],"color":"C7E6BD"},{"v0":168,"v1":169,"cMask":[],"color":"C7E6BD"},{"v0":170,"v1":171,"cMask":[],"color":"C7E6BD"},{"v0":172,"v1":173,"cMask":[],"color":"C7E6BD"},{"v0":174,"v1":175,"cMask":[],"color":"C7E6BD"},{"v0":176,"v1":177,"cMask":[],"color":"C7E6BD"},{"v0":178,"v1":179,"cMask":[],"color":"C7E6BD"},{"v0":180,"v1":181,"cMask":[],"color":"C7E6BD"},{"v0":182,"v1":183,"cMask":[],"color":"C7E6BD"},{"v0":184,"v1":185,"cMask":[],"color":"C7E6BD"},{"v0":186,"v1":187,"cMask":[],"color":"C7E6BD"},{"v0":188,"v1":189,"cMask":[],"color":"C7E6BD"},{"v0":190,"v1":191,"cMask":[],"color":"C7E6BD"},{"v0":192,"v1":193,"cMask":[],"color":"C7E6BD"},{"v0":194,"v1":195,"cMask":[],"color":"C7E6BD"},{"v0":196,"v1":197,"cMask":[],"color":"C7E6BD"},{"v0":198,"v1":199,"cMask":[],"color":"C7E6BD"},{"v0":200,"v1":201,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":203,"v1":202,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":204,"v1":205,"cMask":[],"color":"C7E6BD"},{"v0":206,"v1":207,"cMask":[],"color":"C7E6BD"},{"v0":207,"v1":208,"cMask":[],"color":"C7E6BD"},{"v0":209,"v1":210,"cMask":[],"color":"C7E6BD"},{"v0":211,"v1":212,"cMask":[],"color":"C7E6BD"},{"v0":212,"v1":213,"cMask":[],"color":"C7E6BD"},{"v0":214,"v1":215,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":217,"v1":216,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":218,"v1":219,"cMask":[],"color":"C7E6BD"},{"v0":220,"v1":221,"cMask":[],"color":"C7E6BD"},{"v0":221,"v1":222,"cMask":[],"color":"C7E6BD"},{"v0":223,"v1":224,"cMask":[],"color":"C7E6BD"},{"v0":225,"v1":226,"cMask":[],"color":"C7E6BD"},{"v0":226,"v1":227,"cMask":[],"color":"C7E6BD"},{"v0":228,"v1":229,"cMask":[],"color":"C7E6BD"},{"v0":230,"v1":231,"cMask":[],"color":"C7E6BD"},{"v0":232,"v1":233,"cMask":[],"color":"C7E6BD"},{"v0":234,"v1":235,"cMask":[],"color":"C7E6BD"},{"v0":236,"v1":237,"cMask":[],"color":"C7E6BD"},{"v0":238,"v1":239,"cMask":[],"color":"C7E6BD"},{"v0":237,"v1":240,"cMask":[],"color":"C7E6BD"},{"v0":240,"v1":241,"cMask":[],"color":"C7E6BD"},{"v0":238,"v1":242,"cMask":[],"color":"C7E6BD"},{"v0":242,"v1":243,"cMask":[],"color":"C7E6BD"}],"planes":[{"normal":[0,1],"dist":-600,"bCoef":1.5,"cMask":["ball"]},{"normal":[0,-1],"dist":-600,"bCoef":1.5,"cMask":["ball"]},{"normal":[0,1],"dist":-750,"bCoef":0.1},{"normal":[0,-1],"dist":-750,"bCoef":0.1},{"normal":[1,0],"dist":-1350,"bCoef":0.1},{"normal":[-1,0],"dist":-1350,"bCoef":0.1}],"goals":[{"p0":[-1200,-110],"p1":[-1200,110],"team":"red"},{"p0":[1200,110],"p1":[1200,-110],"team":"blue"}],"discs":[{"pos":[-1200,110],"radius":5,"bCoef":2,"invMass":0,"color":"FF66"},{"pos":[-1200,-110],"radius":5,"bCoef":2,"invMass":0,"color":"FF66"},{"pos":[1200,110],"radius":5,"bCoef":2,"invMass":0,"color":"FF66"},{"pos":[1200,-110],"radius":5,"bCoef":2,"invMass":0,"color":"FF66"},{"pos":[-1300,150],"radius":3,"bCoef":3,"invMass":0,"color":"FF66"},{"pos":[-1300,-150],"radius":3,"bCoef":3,"invMass":0,"color":"FF66"},{"pos":[1300,150],"radius":3,"bCoef":3,"invMass":0,"color":"FF66"},{"pos":[1300,-150],"radius":3,"bCoef":3,"invMass":0,"color":"FF66"},{"pos":[-1200,-600],"radius":3,"invMass":0,"color":"FFFF00","cGroup":[]},{"pos":[-1200,600],"radius":3,"invMass":0,"color":"FFFF00","cGroup":[]},{"pos":[1200,-600],"radius":3,"invMass":0,"color":"FFFF00","cGroup":[]},{"pos":[1200,600],"radius":3,"invMass":0,"color":"FFFF00","cGroup":[]},{"pos":[-115,720],"radius":15,"invMass":0,"color":"333333","cMask":["red","blue"]},{"pos":[-155,720],"radius":15,"invMass":0,"color":"333333","cMask":["red","blue"]},{"pos":[-195,720],"radius":15,"invMass":0,"color":"666666","cMask":["red","blue"]},{"pos":[115,720],"radius":15,"invMass":0,"color":"333333","cMask":["red","blue"]},{"pos":[155,720],"radius":15,"invMass":0,"color":"333333","cMask":["red","blue"]},{"pos":[195,720],"radius":15,"invMass":0,"color":"666666","cMask":["red","blue"]},{"pos":[195,72000],"radius":15,"invMass":0,"color":"666666","cMask":["red","blue"]},{"pos":[-235,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-275,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-315,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-355,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-395,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-435,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[-475,720],"radius":15,"invMass":0,"color":"E56E56","cMask":["red","blue"]},{"pos":[235,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[275,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[315,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[355,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[395,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[435,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]},{"pos":[475,720],"radius":15,"invMass":0,"color":"5689E5","cMask":["red","blue"]}],"playerPhysics":{"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.9995},"ballPhysics":{"damping":1,"color":"CCFF33"},"spawnDistance":350}'


geo = ({
	"code": "ar",
	 "lat": -34.607613980318995, 
	 "lon": -58.43695016686982,

	"code": "br",
	 "lat": -22.498246,
	 "lon": -44.112207,
});


var room = HBInit({
	roomName: "🤖HBENORMOUS🚀ICEBALL|discord.gg/EzS4dG9",
	maxPlayers: 16,
	playerName : "",  /*  🤖 */
	public : true,
	geo
});


room.setDefaultStadium("Big");
room.setScoreLimit(3);
room.setTimeLimit(5);
room.setTeamsLock(true);
/*room.setCustomStadium(Iceball);*/
var redMax = 4;
var blueMax = 4;
var maxPlayers = 16;
var roomPublic = true;
var playerName = "🤖";
var roomName = "🤖HB ENORMOUS🚀ICEBALL SEM VARZEA";
var Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var kickedHost = -1;
var teamMuted = [false, false, false];
var inplay = false;
var playersSilence = [];
var playersFlood = [];
var blockedPlayers = [[], []];
var scores = [0, 0];
var overtime = false;
var continueMatch = false;
var antiFlood = false;
var countTicks = 0;
var expectedTime = 0;
var teamChat = false;
var color = 0;
var players;
var mutedPlayers = [];


let convertMentionToName = (mentionString) => {
  return mentionString.substr(1).split(" ", 1)[0].replace(" ", "").replace(/_/g, " ");
};



function adminFun(player, byPlayer, message){
    // Gives admin to the person who type this password
	room.setPlayerAdmin(player.id, true);
        room.setPlayerAdmin(byPlayer.id, false);
        room.sendAnnouncement(player.name+" ESTA LOGADO COMO SUPERADMIN");
	return false; // The message won't be displayed
	console.log(player.name+" LOGOU COMO ADMINISTRADOR");
}


function clearFun(player){ // !clear
    if (player.admin) {
    	room.clearBans();
room.sendChat("BANS RESETADOS    --- Obs: So admin pode fazer isso.");
console.log("OS BANS FORAM RESETADOS PELO ", player.name + "#" + player.id);
return;
    } 
/*
    else if(oclearFun == true){
    	room.sendChat("VOCE NAO PODE RESETAR OS BANS SEM ADMIN");
console.log("O JOGADOR CITADO TENTOU RESETAR OS BANS SEM ADMIN ", player.name + "#" + player.id);
oclearFun = false;
            return;
    }
    */
}

/*
var oclearFun = if (player.admin){};
var oclearFun = false;
*/



/*
function clearFun(player){ // !clear
        if(player.admin){
        room.clearBans();
        room.sendChat("OS BANS FORAM RESETADOS PELO ", player.name + "#" + player.id);
        console.log("OS BANS FORAM RESETADOS PELO ", player.name + "#" + player.id);
    }else{
        room.sendChat("Ei " + player.name + ", você não tem permissão, só um admin pode realizar esse comando");
    }
}
*/

var mutedPlayers = []; // Array where will be added muted players
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var afkFun = true;
var afkFun = false;





function registrar(player, message){
        room.sendAnnouncement("Ola " + player.name + " entre em nosso discord para saber como se registrar - https://discord.gg/HbAqDvk");
	return false;
}

function login(player, message){
        room.sendAnnouncement("!login-senha-email");
	return false;
}




var commands = {
    
    "!godds": adminFun,
    "!clear": clearFun,
    "!horas": myTimer,
    "!site": siteS,
    "!ffgg": unBansAutomaticos,
    /*"!ranking": rankFun,*/

    "!Sair": sair,
    "!SAIR": sair,
    "!sair": sair,

    "!BB": sair,
    "!bb": sair,
    "!Bb": sair,

    "!leave": sair,
    "!Leave": sair,
    "!LEAVE": sair,
    

//////////////////////////////////////////////////


    /*REGISTRO*/
    "!registrar": registrar,
    "!Registrar": registrar,
    "!REGISTRAR": registrar,
    "!login": login,

/////////////////////////////////////////////////







    /*LOGIN*/
    "!login-1616": aa,

    "!login-keje1313-iamloup@outlook.com": loup,

    "!login-88359642-ga123456987@gmail.com": mod1,

    "!login-papaprof-pedrosantiaggo7@hotmail.com": PapaLeguas,

    "!login-Melumitu-marcelo__ds@hotmail.com": Mello202010,

    "!login-chapecoense-guilhermevanin3@gmail.com": CFC,

    "!login-080658kk-henriquequeirozps@hotmail.com": LJ,

    "!login-eusouoval-valzinho@gmail.com": valzinho,
   
}



function updateAdmins() { 
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 ) return; 
  if ( players.find((player) => player.admin) != null ) return;
  room.setPlayerAdmin(players[0].id, true); 
  console.log(updateAdmins);
}

var messagemFlood = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮ف㤮〕㱳⬗ᅷд甇ᜯ⩿ᤶⱁ戃椏";
var messagemFlood = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸";
var messagemFlood = "结肠是大多数脊椎动物消化系统的最后一部分;从固体废物中取出水和盐，然后将它们从体内清除。  在哺乳动物中，结肠由四个部分组成：升结肠，横结肠，降结肠和乙状结肠。结肠，盲肠和直肠组成大肠";
var messagemFlood = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲ԑ瀩ञࠣ笋℉⨄㐷紪権ਛല്㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἧ浸ἱᔞ፭ਮ娮ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰";
var messagemFlood = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮ف㤮〕㱳⬗ᅷд甇ᜯ⩿ᤶⱁ戃椏缁";

room.onPlayerChat = function(player, message, admin, teamID) {
	if (mutedPlayers.includes(player.name)) return false;
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
    /*console.log("[chat] ", "Admin:" + player.admin, "Time:" + player.team, "ID:" + "#" + player.id + ": ", player.name, ":" + message);*/
    console.log(player, message);



    if (messagemFlood === message) {
    room.kickPlayer(player.id, "Vai floodar essa porra na pqp!", true);
  }

  else if (player.admin && message.substr(0, 5) == "!mute") {
    let flag = false;
    let jogador = convertMentionToName(message.substr(6));
    for (let i of room.getPlayerList()) {
      if (i.name === jogador) flag = true;      
    }    
    if(flag && !mutedPlayers.includes(jogador)) {
      mutedPlayers.push(jogador);
      room.sendChat("O "+ jogador + " foi mutado pelo " + player.name + ".");
      return false;
    }
    
    return false;

  } 
  
  else if (player.admin && message.substr(0, 7) === "!unmute") {
    let pos = mutedPlayers.indexOf(convertMentionToName(message.substr(8)));
    if (pos !== -1) {
      mutedPlayers.splice(pos, 1);
      room.sendChat("O "+ message.substr(8) + " foi desmutado pelo " + player.name + ".");
    }
    return false;
  } 


    if (player.admin && message.toLowerCase() == "!rr") {
        room.stopGame();
        room.startGame();
    }

    if(message=="!discord"){
    room.sendAnnouncement("⚽Entre em nosso servidor para visitar nossos campeonatos:https://discord.gg/HbAqDvk ⚽");
    return false;
}

else if(player.admin && message=="!desbugar"){
	room.sendAnnouncement("SERVIDOR DESBUGADO. . .");
	console.log(player.name, "DESBUGOU O SERVIDOR");
	console.clear();
}
else if(player.admin && message==="!desbugar"){
	room.sendAnnouncement("Você precisa ter admin para realizar esse comando.");
	console.log(player.name, "Tentou desbugar o servidor sem admin.");

}

if(message=="!abuser"){
	room.sendAnnouncement("Obrigado, sua mensagem foi encaminhada ao admin", player.id, 0xF4D03F);
	console.warn(player.name, "Denunciou um admin por ABUSER");
}

if(message=="!ibe1" && player.admin){
        room.setCustomStadium(ibe1);
        room.onStadiumChange = function(newStadiumName, byPlayer) {
if (newStadiumName != "Enormous Space Iceball by Sand from HaxMaps") {
room.setCustomStadium(ibe1);
}
}
        console.log(player.name, "Colocou o mapa IceBallEnormous1");
} else if(message=="!ibe2" && player.admin){
        room.setCustomStadium(ibe2);
        room.onStadiumChange = function(newStadiumName2, byPlayer) {
if (newStadiumName2 != "Enormous Space Iceball | Leo") {
room.setCustomStadium(ibe2);
}
}
        console.log(player.name, "Colocou o mapa IceBallEnormous2");
} 


    if (message == '!afk') {
		room.setPlayerTeam(player.id, 0);
            room.sendAnnouncement(player.name+" Esta AFK agora");
    console.log("%cO jogador executando esse comando esta AFK agora: ", "color:#000;font-size: 12px;background:#00ff95;font-weight: bold;", player.name, "#" + player.id);
            return false;
        /*
        else if ( afkFun == true ){
            afkFun = false;
            room.sendAnnouncement(player.name+" Esta ONLINE agora");
    console.log("%cO jogador executando esse comando esta ONLINE agora: ", "color:#000;font-size: 12px;background:#00ff95;font-weight: bold;", player.name, "#" + player.id);
            return false;
        }
        */
    }


/*
if(message=="oe"){
	room.sendAnnouncement("⚽Cagão demais esse(a) " + player.name + ", caga demais⚽");
}

if(message=="noob"){
	room.sendAnnouncement("⚽Noob é você " + player.name + ", sabe nem chutar⚽");
}

if(message=="mds"){
	room.sendAnnouncement("⚽Mds oque doente, cala e joga⚽");
}
*/

if(message=="!mapas"){
	room.sendAnnouncement("!ibe1(IceEnormous by Sand for Haxmaps), !ibe2(IceEnormous by Leo)");
}

if(message=="!ajuda"){
	room.sendAnnouncement("!frases, !horas, !rr, !mute (@nome),!unmute (@nome), !discord, !sair, !afk, !desbugar, !clear, !mapas, !abuser");
}

if(message=="!frases"){
	room.sendAnnouncement(frasesEntrar.rand() + player.name);
}

else if(message.substr(0, 1) === "@") { 
    let user = convertMentionToName(message.split(" ")[0]);
    let restMessage = message.substr(1).split(/ (.+)/)[1];
    for (let i of room.getPlayerList()) {
      if(i.name === user) {
        room.sendChat("[PV] \"" + player.name + "\" enviou no privado: " + restMessage, i.id);
        return false;
      }
    }
    return false;
  }


/*
if(message=="!times" && player.admin){
room.setTeamColors(1, 180, 0x008000, [0xF9DF00, 0xF9DF00, 0xF9DF00]);
room.setTeamColors(2, 180, 0x02050C, [0xFFFFFF, 0x9DCEFF, 0xFFFFFF]);
}
*/

/*
  for (i = 5; i < 999; i++) {
  room.sendChat("%%%%&#*#$*##$*#*#*)#$*)#$*)#$)*#**)#)*#*#)#*@)*#$)*#$)#*$*#)*)$*)#$*)#$)*#)**$)*#*)#$*)#*)");
  console.count();
}
*/



else {
    let symb = "";
    if (player.team === 0)
      symb = "[🇸]"
    else if (player.team === 1)
      symb = "[🔴]"
    else if (player.team === 2)
      symb = "[🔵]"

 
   /* let avatarr = "";
    if (player.team === 0)
      avatarr = "S"
    else if (player.team === 1)
      avatarr = "R"
    else if (player.team === 2)
      avatarr = "B"*/


    if (teamChat) {
      let playersArray = [
        [], [], []
      ];
      for (let i of room.getPlayerList()) {
        playersArray[i.team].push(i);
      }
    } else {
      for (let i of room.getPlayerList()) {
        if(!playersSilence.includes(i.id) && !playersFlood.includes(player.id)) {
          room.sendChat(symb + " " + player.name + ": " + message, i.id);
          /*room.setPlayerAvatar(player.id, avatarr);*/
        }
      }
    }

    return false;
  }


}



function siteS() {
	setInterval(function(){
	 room.sendAnnouncement("Entre em nosso site e veja as atualizções que terão no bot - https://hbenormous.ueuo.com/"); 
	 return false;
	}, 500000);
}

function unBansAutomaticos(player, message) {
  setInterval(function(){
   room.sendAnnouncement("[IMPORTANTE] Os BANS foram resetados.", player.id, 0xF4D03F);
   room.sendAnnouncement("[IMPORTANTE] Os BANS são resetados a cada 5 minutos.", player.id, 0xF4D03F);
   console.log("[IMPORTANTE] Os BANS foram resetados.");
   console.log("[IMPORTANTE] Os BANS são resetados a cada 5 minutos.");
   room.clearBans(); 
   return false;
  }, 500000);
}




function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  room.sendAnnouncement(d + t);
}







Array.prototype.rand = function() {
  return this[Math.floor(Math.random() * this.length)];
};

var frasesEntrar = [
  "Grande ",
  "O arrombado do ",
  "A lenda ",
  "O random ",
  "Olha que filho da puta esse ",
  "Para de me citar doente ",
  "Olha que doente esse ",
  "IAI CABEÇA DO MEU PAU KKKKKK ",
  "Come meu cu robotico? ",
];



room.onPlayerTeamChange = function(changedPlayer, player, byPlayer){
   if(changedPlayer.id == 0) {
        room.setPlayerTeam(changedPlayer.id, 0);
  }
}


room.onPlayerJoin = function(player) {
	var players = room.getPlayerList();
	clonekick(player);
	room.sendAnnouncement("discord:  https://discord.gg/HbAqDvk  /   !ajuda - !registrar   / Qual quer abuso na admin use !abuser");
  updateAdmins();
  /*
  if(room.getPlayerList().length = limit{
room.setPassword("123");
}
*/

/*
if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "aa") {
			room.setPlayerAdmin(player.id, true);
			room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Master " : "Admin ") + player.name + " acabou de entrar na sala !");
		}
	}
*/

  console.log("%cBEM VINDO: ", "color:#000;font-size: 12px;background:#0f9e1a;font-weight: bold;", player.name, "#" + player.id);
}

room.onPlayerLeave = function(player) {
  updateAdmins(1);
  /*
  if(room.getPlayerList().length < limit){
room.setPassword("");
}
*/
  console.log("%cBYE BYE: ", "color:#fff;font-size: 12px;background:#ff0000;font-weight: bold;", player.name, "#" + player.id);
}



function clonekick(player){
    players = room.getPlayerList();
    for (i = 0; i < players.length-1; i++){
        if (player.name == players[i].name){
            room.kickPlayer(player.id,"Ja tem uma pessoa com esse nome na sala.",false);
        }
    }
}


function sair(player){
            room.kickPlayer(player.id,"Volte sempre.",false);
}


/* players = room.getPlayerList();
if (player.name == players[i].name){
            room.kickPlayer(player.id,"Volte sempre.",false);
        }*/



/*


setInterval(() => {
  room.sendChat('hello')
}, 100)


*/




room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer, player) {


  //if (kickedPlayer.name === "aa", "lamela", "loup" && kickedPlayer.admin) {
   // let m = ban ? "banir" : "kickar";
   // room.kickPlayer(byPlayer.id, "Quer "+ m +" o host, seu cuzão? Toma um ban aí também!", true);
   // room.sendAnnouncement("🔴🔴🔴 O retardado do " + byPlayer.name + " quis " + m + " o host e foi banido. ahuehauehaueu");
   // kickedHost = kickedPlayer.id;
    //setTimeout(() => {/*room.clearBan(this.kickedHost);*/}, 4000);}
    
  console.log("Banido:" + ban, "Foi da sala pelo "+ byPlayer.name + " Motivo:" + reason);
}


var redTeam;
var blueTeam;
room.onGameStart = function() {
    console.log("✅UMA PARTIDA FOI INICIADA:✅ ", "✅RED:✅ ", redTeam, blueTeam, "✅BLUE:✅ ");
    [redTeam,blueTeam] = whichTeam();
}

room.onGameStop = function(){
    console.log("❌UMA PARTIDA FOI CANCELADA:❌ ", "❌RED:❌ ", redTeam, blueTeam, "❌BLUE:❌ ");
}



room.getScores = function(){
	console.log();
}

room.onTeamVictory = function(scores){ // Sum up all scorers since the beginning of the match.
    console.log("----TIME RED:---- ", redTeam);
    console.log("----TIME BLUE:---- ", blueTeam);
    console.log("----SCORES:---- ", scores);

/*
  var nextPlayer = room.getPlayerList().filter((player) => p.team == 0)[2];

  if(nextPlayer == null){
    room.pauseGame("true");

    setTimeout(function(){
      room.pauseGame("false");
    }, 300);
    return;
  }
  */
}


function whichTeam(){ // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}



/*

function rankFun() { // !ranking
    string = ranking();
    room.sendChat("Ranking: " + string);
}

function ranking(){
 
    var overall = [];
    players = Array.from(stats.keys());
    for (var i = 2; i < players.length; i++) {
        score = rankingCalc(players[i])
        // Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })
    string = "";
 
    for (var i = 0; i < overall.length; i++) {
        if (overall[i].value != 0){
            string += i+1 + ") " + overall[i].name + ": " + overall[i].value + " pts, ";
        }
    }
    return string;
}

*/







///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/*LOGIN ABAIXO ↓*/

function aa(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( aa )", player.id, 0xF4D03F);
        room.setPlayerAdmin(player.id, true);
	return false;
}
function loup(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( loup )", player.id, 0xF4D03F);
        room.setPlayerAdmin(player.id, true);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( loup )");
	return false;
}
function mod1(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( ꧁ঔৣ☬✞ ᴹᵒᵈ ✞☬ঔৣ꧂ )", player.id, 0xF4D03F);
        console.log(player.name + " esta logado como [ⒷⓇ]( ꧁ঔৣ☬✞ ᴹᵒᵈ ✞☬ঔৣ꧂ )");
	return false;
}

function PapaLeguas(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( ♦ Papa Léguas ♦ )", player.id, 0xF4D03F);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( ♦ Papa Léguas ♦ )");
	return false;
}
function Mello202010(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( Mello202010 )", player.id, 0xF4D03F);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( Mello202010 )");
	return false;
}
function CFC(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( CFC|ɢᴜɪ )", player.id, 0xF4D03F);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( CFC|ɢᴜɪ )");
	return false;
}
function LJ(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( LJ )", player.id, 0xF4D03F);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( LJ )");
	return false;
}
function valzinho(player, message){
        room.sendAnnouncement("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( valzinho )", player.id, 0xF4D03F);
        console.log("[✅]─ " + player.name + " esta logado como [ⒷⓇ]( valzinho )");
	return false;
}