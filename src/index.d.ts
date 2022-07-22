declare module 'FlightType' {
  type FlightType = {
    FlightId: number;
    SessionId: number;
    StartPoint: string;
    EndPoint: string;
    AirlineCode: string;
    Duration: number;
    SeatRemain: number;
    Stops: number;
    FlightNumber: string;
    Plane: null;
    Carryon: string;
    Freebag: string;
    FareBasis: string;
    FareType: string;
    CompareMode: null;
    FareRule: null;
    MarketingAirline: string;
    OperatingAirline: string;
    FeeAdult: number;
    ChargeAdult: number;
    PriceAdult: number;
    TaxAdult: number;
    FeeChild: number;
    ChargeChild: number;
    PriceChild: number;
    TaxChild: number;
    FeeInfant: number;
    ChargeInfant: number;
    PriceInfant: number;
    TaxInfant: number;
    FareClass: string;
    GroupClass: string;
    Promo: boolean;
    HasChangedClass: boolean;
    ReturnFlight: boolean;
    NoRefund: boolean;
    DayChange: boolean;
    StopOvernight: boolean;
    HasDownStop: boolean;
    StartDate: string;
    EndDate: string;
    RelatedFlights: RelatedFlights[];
  };
  type RelatedFlights = {
    AirlineCode: string;
    SeatClass: string;
    Duration: number;
    FlightNumber: string;
    StartPoint: string;
    EndPoint: string;
    Plane: string;
    StartTime: string;
    EndTime: string;
    Carryon: string;
    Freebag: string;
    Index: number;
  };
}
