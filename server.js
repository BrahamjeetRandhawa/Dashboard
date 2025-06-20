

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('static'));
app.set("view engine", "ejs");
app.set("views", "views");

// Database setup

app.use(cors());

app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, "data", 'dB.xlsx');
    const workbook = xlsx.readFile(filePath);

    // Financials uitlezen
    const financialSheet = workbook.Sheets['Financials'];
    const financialData = xlsx.utils.sheet_to_json(financialSheet);

    // Demand View uitlezen
    const demandViewSheet = workbook.Sheets['Demand_view'];
    const demandViewData = xlsx.utils.sheet_to_json(demandViewSheet);

    // Fullfillment uitlezen
    const fulfilmentViewSheet = workbook.Sheets['Fulfilment_view'];
    const fulfilmentViewData = xlsx.utils.sheet_to_json(fulfilmentViewSheet);

    // Client Partner Focus uitlezen
    const clientPartnerSheet = workbook.Sheets['Client_partner'];
    const clientPartnerData = xlsx.utils.sheet_to_json(clientPartnerSheet);

    // Thought Leadership Demonstration uitlezen
    const thoughtLeadershipSheet = workbook.Sheets['Thought_leadership'];
    const thoughtLeadershipData = xlsx.utils.sheet_to_json(thoughtLeadershipSheet);

    // North Star POD uitlezen
    const nortStarSheet = workbook.Sheets['North_star'];
    const northStarData = xlsx.utils.sheet_to_json(nortStarSheet);

    // GTM improvement focus uitlezen
    const gtmImprovementSheet = workbook.Sheets['GTM_improvement'];
    const gtmImprovementData = xlsx.utils.sheet_to_json(gtmImprovementSheet);

    // Operations Customer Specific uitlezen
    const operationsCustomerSheet = workbook.Sheets['Operations_customer'];
    const operationsCustomerData = xlsx.utils.sheet_to_json(operationsCustomerSheet);

    // Operations HCLTech Specific uitlezen
    const operationsHCLTechSheet = workbook.Sheets['Operations_hcltech'];
    const operationsHCLTechData = xlsx.utils.sheet_to_json(operationsHCLTechSheet);

    // Customer Delight uitlezen
    const customerDelightSheet = workbook.Sheets['Customer_delight'];
    const customerDelightData = xlsx.utils.sheet_to_json(customerDelightSheet);

    // Dex uitlezen
    const dexSheet = workbook.Sheets['dex'];
    const dexData = xlsx.utils.sheet_to_json(dexSheet);

    // Engineer Delight uitlezen
    const engineerDelightSheet = workbook.Sheets['Engineer_delight'];
    const engineerDelightData = xlsx.utils.sheet_to_json(engineerDelightSheet);

    // Engineer Upskilling uitlezen
    const engineerUpskillingSheet = workbook.Sheets['Engineer_upskilling'];
    const engineerUpskillingData = xlsx.utils.sheet_to_json(engineerUpskillingSheet);

    // Governance Customer uitlezen
    const governanceCustomerSheet = workbook.Sheets['Governance_customer'];
    const governanceCustomerData = xlsx.utils.sheet_to_json(governanceCustomerSheet);

    // Governance Internal uitlezen
    const governanceInternalSheet = workbook.Sheets['Governance_internal'];
    const governanceInternalData = xlsx.utils.sheet_to_json(governanceInternalSheet);

    res.json({
        financials: financialData,
        demandView: demandViewData,
        fulfilmentView: fulfilmentViewData,
        clientPartner: clientPartnerData,
        thoughtLeadership: thoughtLeadershipData,
        northStar: northStarData,
        gtmImprovement: gtmImprovementData,
        operationsCustomer: operationsCustomerData,
        operationsHcltech: operationsHCLTechData,
        customerDelight: customerDelightData,
        dex: dexData,
        engineerDelight: engineerDelightData,
        engineerUpskilling: engineerUpskillingData,
        governanceCustomer: governanceCustomerData,
        governanceInternal: governanceInternalData

    });
});





// const data = [
//     { id: 1, label: 'Budget', percentage: 26, title: 'Revenue'},
//     { id: 2, label: 'Actuals', percentage: 28, title: 'Revenue'},
//     { id: 3, label: 'Achieved percentage', percentage: 108, title: 'Revenue'},
//     { id: 4, label: 'Budget', percentage: 28, title: 'Gross Margin $'},
//     { id: 5, label: 'Actuals', percentage: 28, title: 'Gross Margin $'},
//     { id: 6, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin $'},
//     { id: 7, label: 'Budget', percentage: 26, title: 'Gross Margin %'},
//     { id: 8, label: 'Actuals', percentage: 28, title: 'Gross Margin %'},
//     { id: 9, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin %'},
// ];

// app.get('/api/data', (req, res) => {
//     res.json(data);
// });















app.get('/', (req, res) => {
    res.render('index.ejs' );
});


// Keep the error handlers and server start at the end

// Middleware to handle 404 errors

app.use((req, res) => {
    console.log('404: Page Not Found' + req.url);
    // style this in the future
    res.status(404).render('404.ejs');
})

// Middleware to handle server errors
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('500: Internal Server Error');
});

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`);
});