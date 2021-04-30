const controller = new window.ScrollMagic.Controller();

window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded");

    // Landing page animation
    window.gsap.timeline()
        .from("#motto-line-1", { duration: 0.8, x: -30, opacity: 0, delay: 0.5 })
        .from("#motto-line-2", { duration: 0.8, x: 30, opacity: 0 })
        .from("#motto-description", { duration: 0.8, y: 15, opacity: 0 });
});

document.addEventListener("DOMContentLoaded",
    () => {
        window.google.load("visualization", "1", { 'packages': ["geochart"] });
        window.google.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            const data = new window.google.visualization.DataTable();
            data.addColumn("string", "Region");
            data.addColumn("number", "Total Waste");
            data.addRows([
                [{ f: "Autonomous Region in Muslim Mindanao (ARMM)", v: "PH-14" }, 972.14],
                [{ f: "Bicol (Region V)", v: "PH-05" }, 2012.26],
                [{ f: "Cagayan Valley (Region II)", v: "PH-02" }, 1178.86],
                [{ f: "Calabarzon (Region IV-A)", v: "PH-40" }, 4440.15],
                [{ f: "Caraga (Region XIII)", v: "PH-13" }, 947.57],
                [{ f: "Central Luzon (Region III)", v: "PH-03" }, 3890.12],
                [{ f: "Central Visayas (Region VII)", v: "PH-07" }, 2790.86],
                [{ f: "Cordillera Administrative Region (CAR)", v: "PH-15" }, 664.75],
                [{ f: "Davao (Region XI)", v: "PH-11" }, 1947.26],
                [{ f: "Eastern Visayas (Region VIII)", v: "PH-08" }, 1584.61],
                [{ f: "Ilocos (Region I)", v: "PH-01" }, 1380.64],
                [{ f: "Mimaropa (Region IV-B)", v: "PH-41" }, 974.06],
                [{ f: "National Capital Region", v: "PH-00" }, 9212.92],
                [{ f: "Northern Mindanao (Region X)", v: "PH-10" }, 1814.32],
                [{ f: "Soccsksargen (Region XII)", v: "PH-12" }, 1444.01],
                [{ f: "Western Visayas (Region VI)", v: "PH-06" }, 2892.04],
                [{ f: "Zamboanga Peninsula (Region IX)", v: "PH-09" }, 1490.88]
            ]);

            const options = {
                'title': "Waste Generation per region as of 2016",
                'region': "PH",
                'resolution': "provinces",
                colorAxis: { colors: ["#32CD32", "#FFD700", "#e31b23"] },
                backgroundColor: "black",
                datalessRegionColor: "black",
                defaultColor: "#f5f5f5"
            };

            const heatMapDiv = document.getElementById("philHeatmapPic");
            const geochart = new window.google.visualization.GeoChart(heatMapDiv);
            geochart.draw(data, options);
        };


        /**
         * ScrollMagic scenes
         */
        new window.ScrollMagic.Scene({
            triggerElement: ".card",
            triggerHook: 0.75
        })
            .setTween(
                window.gsap.timeline()
                    .from("#whatArePlasticsDesc", { duration: 0.6, y: 15, opacity: 0 })
                    .from(".card", { duration: 0.6, y: 15, opacity: 0, stagger: 0.6 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#its-everywhere",
            triggerHook: 0
        })
            .setTween(
                window.gsap.timeline()
                    .to("#its-everywhere-container", { duration: 1, xPercent: -20 }, "label1")
                    .from("#everywhere2", { duration: 0.5 }, "label1+=0.5")
            )
            .setPin("#its-everywhere")
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#co2Emission h1",
            triggerHook: 0.75
        })
            .setTween(
                window.gsap.from("#co2Emission h1", { duration: 1.5, x: 30, opacity: 0 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#co2-data h1",
            triggerHook: 0.75
        })
            .setTween(
                window.gsap.from("#co2-data h1, #co2-data p", { duration: 0.6, y: 30, opacity: 0, stagger: 0.6 })
            )
            .addTo(controller);

        let video = document.querySelector("#co2-data video");
        new window.ScrollMagic.Scene({
            duration: video.duration * 1000,
            triggerElement: "#co2-data",
            triggerHook: 0.25
        })
            .on("enter", () => {
                video.play();
            })
            .on("leave", () => {
                video.pause();
            })
            .addTo(controller);

        new window.ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#philBg",
            triggerHook: 0
        })
            .setTween(window.gsap.to("#philBg h1", { color: "white", backgroundColor: "black" }))
            .setPin("#philBg")
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#philAve",
            triggerHook: 0.5
        })
            .setTween(
                window.gsap.timeline()
                    .from("#philAveMask", { duration: 0.6, backgroundColor: 'black' })
                    .from("#philAve p, #philAve strong", { duration: 0.6, y: 30, opacity: 0, stagger: 0.2 })
            )
            .addTo(controller);


        new window.ScrollMagic.Scene({
            triggerElement: "#philStat",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#philStat .card img", { duration: 0.6, y: -100, opacity: 0, stagger: 0.4, ease: 'Bounce.easeOut' })
                    .from("#philStat .card p", { duration: 0.6, x: -15, opacity: 0, stagger: 0.25 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#barangays",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#barangays .mask", { duration: 0.6, backgroundColor: 'black' })
                    .from("#barangays div.text-white *", { duration: 0.6, y: 15, opacity: 0, stagger: 0.25 })
            )

            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#philHeatmap",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#philHeatmap h1, #philHeatmap h2", { duration: 0.6, y: 15, opacity: 0, stagger: 0.6 })
                    .from("#philHeatmapPic", { duration: 0.6, x: 30, opacity: 0 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#swm",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#swm .mask", { duration: 0.6, backgroundColor: 'black' })
                    .from("#swm div.text-white *", { duration: 0.6, y: 15, opacity: 0, stagger: 0.25 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#swmBudget",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#swmBudget .mask", { duration: 0.6, backgroundColor: 'black' })
                    .from("#swmBudget div.text-white *", { duration: 0.6, y: 15, opacity: 0, stagger: 0.25 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            triggerElement: "#ra9003",
            triggerHook: 0.25
        })
            .setTween(
                window.gsap.timeline()
                    .from("#ra9003 .mask", { duration: 0.6, backgroundColor: 'black' })
                    .from("#ra9003 div.text-white *", { duration: 0.6, y: 15, opacity: 0, stagger: 0.25 })
            )
            .addTo(controller);

        new window.ScrollMagic.Scene({
            duration: 8000,
            triggerElement: "#outro",
            triggerHook: 0
        })
            .setTween(
                window.gsap.timeline()
                    .from("#outro1", { duration: 1, opacity: 0 })
                    .to("#outro1", { duration: 1, opacity: 0 })
                    .from("#outro2", { duration: 1, opacity: 0 })
                    .to("#outro2", { duration: 1, opacity: 0 })
                    .from("#outro3", { duration: 1, opacity: 0 })
                    .to("#outro3", { duration: 1, opacity: 0 })
                    .to("#outro *", { duration: 1, opacity: 1 })
            )
            .setPin("#outro")
            .addTo(controller);
    });
