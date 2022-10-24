import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import './powerbistyle.css'

export default function MyTableModel(){
 
  return (
    <div className='w-full h-full'>
      <PowerBIEmbed
        embedConfig={{
          type: "dashboard", // Supported types: report, dashboard, tile, visual and qna
          id: "059680da-631c-48db-b414-9702c2471326",
          embedUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiMTAzOWVhMTEtNDk5Zi00ZDFmLWEyYmYtODZlYjk3MWIwYTQ3IiwidCI6ImM3YjAwZDdmLWFkOTktNDQyYS1iMTJmLWMyYzkxMjA0NGZkYyIsImMiOjEwfQ%3D%3D",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzdiMDBkN2YtYWQ5OS00NDJhLWIxMmYtYzJjOTEyMDQ0ZmRjLyIsImlhdCI6MTY2NTIwNzEwNywibmJmIjoxNjY1MjA3MTA3LCJleHAiOjE2NjUyMTIwODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFZd1NBdnpaODA2eWFXUXhMMUFyakx6Wnc1bitEV3dJRlNOdW15VkRQT08zMzVSN2hnTXgzQ0FjL3RkY1JOb2diIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiMGM1NzA1Y2EtNDM2OS00OWUwLTlhMWYtZTBiNzcwYjIwOTJkIiwiZmFtaWx5X25hbWUiOiJNb3JlIiwiZ2l2ZW5fbmFtZSI6IlByaXlhbnNodSIsImlwYWRkciI6IjQ5LjM2LjExMy4yMjAiLCJuYW1lIjoiUHJpeWFuc2h1IE1vcmUiLCJvaWQiOiI1NTQ3ZDFlMC1kNThlLTQ2YjItOWUxYi0xNGRlMTgyY2YyMGMiLCJwdWlkIjoiMTAwMzIwMDExNDFFMzg4RiIsInJoIjoiMC5BWElBZncyd3g1bXRLa1N4TDhMSkVnUlAzQWtBQUFBQUFBQUF3QUFBQUFBQUFBQnlBQWsuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Inp0TFlSTnVPNm10RFhaMTZxVGM0NVRObnVIdWNPdjNNMmdqQllBNUM5RjQiLCJ0aWQiOiJjN2IwMGQ3Zi1hZDk5LTQ0MmEtYjEyZi1jMmM5MTIwNDRmZGMiLCJ1bmlxdWVfbmFtZSI6InByaXlhbnNodS5tb3JlQHZpdC5lZHUuaW4iLCJ1cG4iOiJwcml5YW5zaHUubW9yZUB2aXQuZWR1LmluIiwidXRpIjoicHo3Nmh2MWsyRXVpRmpsN2FOZDBBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.hHbvtERA2rK5I3mQvJT_VQImcDlv72tUx3aflJ7i06udy-DwYn8taUGND0lvESnFEzp0xbuO1f8p0LlYWkFnVPFtQmlpdNEQOLqV4TXpUtxmvFq1U_oJJmNqzonos40sXUuHVtKeuppjT62nCpD5n_hb5pt8ZfBGsL_KlK2Uf1ruyyUGmu6xwSMu2m7F-eTdX1FXrHYYFZUyakulKPoGpf1nzcOCJsTtwywtVQzHlK53VbUHKM2EOi5iIK3EbD6lpecluNvl_6sQNdN3ws315Jiugfmrh4fbMJXzeJEcbmuvZ1MNUoj7vsMPqwoFMgoROnnNZ8kivS8zP6bBRdiRtw",
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
}
