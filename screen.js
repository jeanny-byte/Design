    function takeScreenshotAndSaveAndCopy() {
        const buttonToHide = document.getElementById("S_Button");
        buttonToHide.style.display = "none";

       
        const targetElement = document.getElementById("WeeklyReportTable");
        html2canvas(targetElement).then(function(canvas) {
            buttonToHide.style.display = "block";
            const imageURL = canvas.toDataURL("image/png");

             // Generate a unique filename using the current date and time
             const currentDate = new Date();
             const fileName = "Weekly_Report_" + currentDate.getFullYear() +
                 "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate() +
                 "_" + currentDate.getHours() + ":" + currentDate.getMinutes() + ".png";

            const downloadLink = document.createElement("a");
            downloadLink.href = imageURL;
            downloadLink.download = fileName;

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            const tempImg = document.createElement("img");
            tempImg.src = imageURL;
            document.body.appendChild(tempImg);

            tempImg.style.position = "fixed";
            tempImg.style.left = "0";
            tempImg.style.top = "0";
            tempImg.style.opacity = "0";
            document.getSelection().removeAllRanges();
            const range = document.createRange();
            range.selectNode(tempImg);
            document.getSelection().addRange(range);
            document.execCommand("copy");
            document.getSelection().removeAllRanges();
            document.body.removeChild(tempImg);

            alert("This Report's screenshot saved as PNG file");
        });
    }

;