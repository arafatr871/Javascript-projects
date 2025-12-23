<!DOCTYPE html>
<html>

<head>
    <title>Real Clock</title>

    <style>
        .clk {
            width: 300px;
            height: 300px;
            border: 10px solid blue;
            border-radius: 50%;
            position: relative;
            margin: 50px auto;
            background: rgb(231, 218, 218);
            box-shadow: 0 0 50px burlywood;
            box-shadow: inset 0 0 20px blue;
        }

        .pnt {
            width: 20px;
            height: 6px;
            background: black;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -3px;
            transform-origin: left;
        }

        #bgVideo {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            z-index: -1;
        }

        .h {
            position: absolute;
            bottom: 50%;
            left: 50%;
            transform: translateX(-50%);
            transform-origin: bottom;
            border-radius: 10px;
        }

        .hour {
            width: 10px;
            height: 70px;
            background: rgb(19, 17, 17);
            z-index: 1;
        }

        .minute {
            width: 7px;
            height: 90px;
            background: rgb(82, 69, 69);
            z-index: 2;
        }

        .sec {
            width: 2px;
            height: 110px;
            background: rgba(55, 60, 190, 0.6);
            z-index: 3;
        }

        .center {
            width: 12px;
            height: 12px;
            background: skyblue;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 4;
        }
        .dig{
            margin-top: 20px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 30px;
            font-weight: bold;
            background: white;
            color: black;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0 0 10px blue;
            box-shadow: inset 0 0 10px blue;
            border: 2px solid blue;
            text-align: center;
        }
        h1{
            text-align: center;
            font-weight: bold;
            color: aqua;
            font-size: 23px;
        }
        .cntr{
            position: absolute;
            top: 20%;
            left: 28%;
        }
    </style>
</head>

<body>
    <video autoplay muted loop id="bgVideo">
        <source src="https://www.pexels.com/download/video/19642749/" type="video/mp4">
    </video>
    
    <div class="clk">
        <div class="pnt" style="transform: rotate(0deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(30deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(60deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(90deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(120deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(150deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(180deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(210deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(240deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(270deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(300deg) translateX(125px)"></div>
        <div class="pnt" style="transform: rotate(330deg) translateX(125px)"></div>

        <h1 class="cntr">Analog Clock</h1>

        <div class="h hour" id="hour"></div>
        <div class="h minute" id="minute"></div>
        <div class="h sec" id="sec"></div>
        <div class="center"></div>
    </div>
    <div id="dig-tim" class="dig">
        <b>00:00:00</b>
    </div>

    <script>
        function updateClock() {
            const now = new Date();

            const sec = now.getSeconds();
            const min = now.getMinutes();
            const hour = now.getHours();

            const secDeg=sec*6;
            const minDeg=(min*6)+(sec/10);
            const hourDeg=(hour*30)+(min/2);

            const secHand= document.getElementById('sec');
            secHand.style.transform=`translateX(-50%) rotate(${secDeg}deg)`;

            let minHand= document.getElementById('minute');
            minHand.style.transform=`translateX(-50%) rotate(${minDeg}deg)`;

            let hourHand= document.getElementById('hour');
            hourHand.style.transform=`translateX(-50%) rotate(${hourDeg}deg)`;
        
            const dhour=String(hour%12||12).padStart(2,'0');
            const dmin=String(min).padStart(2,'0');
            const dsec=String(sec).padStart(2,'0');

            document.getElementById('dig-tim').innerHTML=`Digital Clock : ${dhour}:${dmin}:${dsec}`;
        }
        setInterval(updateClock,1000);
        updateClock()
    </script>
</body>
</html>
