import { ReportHandler } from 'web-vitals';

export interface WebVitalsMethods {
  getCLS: (onReport: ReportHandler, reportAllChanges?: boolean | undefined) => void;
  getFID: (onReport: ReportHandler) => void;
  getFCP: (onReport: ReportHandler) => void;
  getLCP: (onReport: ReportHandler, reportAllChanges?: boolean | undefined) => void;
  getTTFB: (onReport: ReportHandler) => void;
}
