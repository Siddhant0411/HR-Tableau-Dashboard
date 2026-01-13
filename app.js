console.log('Is this working?');

let viz;

const url = "https://public.tableau.com/views/HRdashboard_17682989195620/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');

const options = {
    hideTabs: true,
    width: "100%", 
    height: "800px", 
    onFirstInteraction: function() {
        const workbook = viz.getWorkbook();
        const activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');

function generatePDF() {
    viz.showExportPDFDialog();
}

exportPDF.addEventListener("click", function () {
    generatePDF();
});

function generateImage() {
    viz.showExportImageDialog();
}

exportImage.addEventListener("click", function () {
    generateImage();
});
