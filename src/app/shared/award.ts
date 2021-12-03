
export class Award {
    id: string
    Award_Number: string;
    Award_Name: String;
    Award_PI: String;
    Award_Sponsor: String;
    Dept_Number: Int32Array;
    Start_Date: Date;
    End_Date: Date;
    Reporting_Period: ReportPeriodChoice;
    Special_Report: SpecialReportChoice;
    Report_Status: ReportStatusChoice;
}

export enum ReportStatusChoice {
    INCOMPLETE ='Incomplete',
    WIP = 'Work in Progress',
    DEPARTMENT= "Pending Department Review",
    REVIEW ="Ready for Manager Review",
    ERROR ="Report is Incorrect",
    COMPLETE = 'Report is Reviewed and Approved',
    SENT ="Report Sent to Sponsor"
}

export enum ReportPeriodChoice {
    ANNUAL ="Annual",
    SEMI = "Semi-Annual",
    Quarter= "Quarterly"
}

export enum SpecialReportChoice {
    EFFORT ="Effort Certification",
    COI = "Conflict of Interest Review",
    PAYROLL ="Detailed Payroll Report"
}