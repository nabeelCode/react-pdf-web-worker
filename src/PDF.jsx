import {
  Document,
  Page,
  Text,
  Font,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { format, isValid } from "date-fns";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const pdfStyles = StyleSheet.create({
  addressBox: { padding: 3 },
  alignRight: { textAlign: "right" },
  alignLeft: { textAlign: "left" },
  alignCenter: { textAlign: "center" },
  alignSelfCenter: { alignSelf: "center" },
  allSideBorder: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000000",
  },
  bold500: { fontWeight: 500 },
  subTitle: {
    fontSize: 13,
    fontWeight: 700,
  },
  body1: { fontSize: 10 },
  bottomBorder: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#000000",
  },
  sizeMedium: {
    fontSize: 15,
  },
  col4: { width: "25%" },
  col8: { width: "75%" },
  col6: { width: "50%" },

  docTitle: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: 700,
  },
  marginSmall: {
    margin: 2,
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 10,
    padding: "10 0",
    marginHorizontal: "12px",

    borderStyle: "solid",
    position: "absolute",
    borderColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gridContainer: { flexDirection: "row", justifyContent: "space-between" },
  h3: { fontSize: 16, fontWeight: 700 },
  h4: { fontSize: 13, fontWeight: 700 },
  header: {
    // paddingBottom: 10,
    // marginBottom: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    // borderColor: '#000000',
  },
  leftBorder: {
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderColor: "#000000",
  },
  mb8: { marginBottom: 8 },
  mt8: { marginTop: 8 },
  mb40: { marginBottom: 40 },
  noBorder: { paddingTop: 8, paddingBottom: 0, borderBottomWidth: 0 },
  ogName: {
    fontSize: 15,
    fontWeight: 10000,
  },
  capital: {
    textTransform: "capitalize",
  },
  overline: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  page: {
    padding: "15px 10px 90px 10px",
    fontSize: 11,
    lineHeight: 1.3,
    // fontFamily: 'Roboto',
    backgroundColor: "#fff",
    // textTransform: 'capitalize'
  },
  a5Page: {
    marginHorizontal: "5px",
    marginVertical: "10px",
    fontSize: 11,
    lineHeight: 1.3,
    // fontFamily: 'Roboto',
    // backgroundColor: '#fff',
    // textTransform: 'capitalize'
  },
  pageNumber: {
    // position: 'absolute',
    fontSize: 12,
    // bottom: 30,
    // left: 0,
    // right: 0,
    textAlign: "center",
    color: "grey",
  },
  rightBorder: {
    borderStyle: "solid",
    borderRightWidth: 1,
    borderColor: "#000000",
  },
  verticalBorder: {
    borderStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: "#000000",
  },
  subtitle2: { fontSize: 9, fontWeight: 700 },
  table: { display: "flex", width: "auto" },
  tableBody: {},
  tableCell: {
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderLeftColor: "#000000",
    padding: 1,
  },
  tableCell_1: { width: "5%" },
  tableCell_2: { width: "50%", paddingRight: 16 },
  tableCell_3: { width: "15%" },
  tableHeader: {},
  tableRow: {
    padding: "8px 0",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#000000",
  },
  topBorder: {
    borderStyle: "solid",
    borderTopWidth: 1,
    borderColor: "#000000",
  },
  horizontalBorder: {
    borderStyle: "solid",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#000000",
  },
  leftLightBorder: {
    borderStyle: "solid",
    borderLeftWidth: 0.5,
    borderLeftColor: "lightgrey",
    paddingLeft: 2,
  },
  rightLightBorder: {
    borderStyle: "solid",
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
    paddingLeft: 2,
  },
});

export const PDF = ({ data }) => {
  function fddmmyy(date) {
    // console.log({date});
    return date && isValid(new Date(date) || date)
      ? format(new Date(date), "dd-MM-yy")
      : "";
  }
  console.log(data);
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={pdfStyles.page}>
        <View
          style={{
            ...pdfStyles.topBorder,
            backgroundColor: "#f2f4f7",
            flexDirection: "row",
            fontSize: 12,
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Text style={{ width: "13%" }}>S.Inv.No.</Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
            Inv.Dt.
          </Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
            Pcs
          </Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "19%" }}>
            Inv.Amt.
          </Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "18%" }}>
            Transport
          </Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
            LR.No.
          </Text>
          <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
            LR.Date
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 2,
            justifyContent: "space-between",
          }}
        >
          {data.map((invoiceData, index) => (
            <View
              key={index}
              style={{
                ...pdfStyles.topBorder,
                backgroundColor: "#f2f4f7",
                flexDirection: "row",
                fontSize: 12,
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <Text style={{ width: "13%" }}>{invoiceData.sInvNo}</Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
                {fddmmyy(invoiceData.invoiceDate)}
              </Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
                {invoiceData.pcs}
              </Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "19%" }}>
                {invoiceData.invAmount}
              </Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "18%" }}>
                {invoiceData.transport}
              </Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
                {invoiceData.lrNo}
              </Text>
              <Text style={{ ...pdfStyles.leftLightBorder, width: "13%" }}>
                {fddmmyy(invoiceData.lrDate)}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
