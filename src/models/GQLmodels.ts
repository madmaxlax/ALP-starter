/* eslint-disable camelcase */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  money: any;
  timestamp: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Job = {
  __typename?: 'Job';
  company?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  employmentType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  skillsRequired?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations = {
  __typename?: 'eanalytics_engineeringlocations';
  createdt: Scalars['timestamp'];
  engineeriongtiv: Scalars['money'];
  fmgindexrecnum?: Maybe<Scalars['String']>;
  /** An object relationship */
  location: Eanalytics_Locations;
  locationid: Scalars['Int'];
  mfl: Scalars['money'];
  updatedt: Scalars['timestamp'];
};

/** order by aggregate values of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Aggregate_Order_By = {
  avg?: Maybe<Eanalytics_Engineeringlocations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eanalytics_Engineeringlocations_Max_Order_By>;
  min?: Maybe<Eanalytics_Engineeringlocations_Min_Order_By>;
  stddev?: Maybe<Eanalytics_Engineeringlocations_Stddev_Order_By>;
  stddev_pop?: Maybe<Eanalytics_Engineeringlocations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eanalytics_Engineeringlocations_Stddev_Samp_Order_By>;
  sum?: Maybe<Eanalytics_Engineeringlocations_Sum_Order_By>;
  var_pop?: Maybe<Eanalytics_Engineeringlocations_Var_Pop_Order_By>;
  var_samp?: Maybe<Eanalytics_Engineeringlocations_Var_Samp_Order_By>;
  variance?: Maybe<Eanalytics_Engineeringlocations_Variance_Order_By>;
};

/** order by avg() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Avg_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eanalytics.engineeringlocations". All fields are combined with a logical 'AND'. */
export type Eanalytics_Engineeringlocations_Bool_Exp = {
  _and?: Maybe<Array<Eanalytics_Engineeringlocations_Bool_Exp>>;
  _not?: Maybe<Eanalytics_Engineeringlocations_Bool_Exp>;
  _or?: Maybe<Array<Eanalytics_Engineeringlocations_Bool_Exp>>;
  createdt?: Maybe<Timestamp_Comparison_Exp>;
  engineeriongtiv?: Maybe<Money_Comparison_Exp>;
  fmgindexrecnum?: Maybe<String_Comparison_Exp>;
  location?: Maybe<Eanalytics_Locations_Bool_Exp>;
  locationid?: Maybe<Int_Comparison_Exp>;
  mfl?: Maybe<Money_Comparison_Exp>;
  updatedt?: Maybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Max_Order_By = {
  createdt?: Maybe<Order_By>;
  engineeriongtiv?: Maybe<Order_By>;
  fmgindexrecnum?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** order by min() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Min_Order_By = {
  createdt?: Maybe<Order_By>;
  engineeriongtiv?: Maybe<Order_By>;
  fmgindexrecnum?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "eanalytics.engineeringlocations". */
export type Eanalytics_Engineeringlocations_Order_By = {
  createdt?: Maybe<Order_By>;
  engineeriongtiv?: Maybe<Order_By>;
  fmgindexrecnum?: Maybe<Order_By>;
  location?: Maybe<Eanalytics_Locations_Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** select columns of table "eanalytics.engineeringlocations" */
export enum Eanalytics_Engineeringlocations_Select_Column {
  /** column name */
  Createdt = 'createdt',
  /** column name */
  Engineeriongtiv = 'engineeriongtiv',
  /** column name */
  Fmgindexrecnum = 'fmgindexrecnum',
  /** column name */
  Locationid = 'locationid',
  /** column name */
  Mfl = 'mfl',
  /** column name */
  Updatedt = 'updatedt',
}

/** order by stddev() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Stddev_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Stddev_Pop_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Stddev_Samp_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by sum() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Sum_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Var_Pop_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Var_Samp_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** order by variance() on columns of table "eanalytics.engineeringlocations" */
export type Eanalytics_Engineeringlocations_Variance_Order_By = {
  engineeriongtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  mfl?: Maybe<Order_By>;
};

/** columns and relationships of "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses = {
  __typename?: 'eanalytics_engineeringrcmdtnresponses';
  createdt: Scalars['timestamp'];
  /** An object relationship */
  engineeringrcmdtn: Eanalytics_Engineeringrcmdtns;
  rcmdtnid: Scalars['Int'];
  rcmdtnresponse: Scalars['String'];
  updatedt: Scalars['timestamp'];
};

/** order by aggregate values of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Aggregate_Order_By = {
  avg?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Max_Order_By>;
  min?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Min_Order_By>;
  stddev?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Stddev_Order_By>;
  stddev_pop?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Stddev_Samp_Order_By>;
  sum?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Sum_Order_By>;
  var_pop?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Var_Pop_Order_By>;
  var_samp?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Var_Samp_Order_By>;
  variance?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Variance_Order_By>;
};

/** order by avg() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Avg_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eanalytics.engineeringrcmdtnresponses". All fields are combined with a logical 'AND'. */
export type Eanalytics_Engineeringrcmdtnresponses_Bool_Exp = {
  _and?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>>;
  _not?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>;
  _or?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>>;
  createdt?: Maybe<Timestamp_Comparison_Exp>;
  engineeringrcmdtn?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
  rcmdtnid?: Maybe<Int_Comparison_Exp>;
  rcmdtnresponse?: Maybe<String_Comparison_Exp>;
  updatedt?: Maybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Max_Order_By = {
  createdt?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnresponse?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** order by min() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Min_Order_By = {
  createdt?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnresponse?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "eanalytics.engineeringrcmdtnresponses". */
export type Eanalytics_Engineeringrcmdtnresponses_Order_By = {
  createdt?: Maybe<Order_By>;
  engineeringrcmdtn?: Maybe<Eanalytics_Engineeringrcmdtns_Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnresponse?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** select columns of table "eanalytics.engineeringrcmdtnresponses" */
export enum Eanalytics_Engineeringrcmdtnresponses_Select_Column {
  /** column name */
  Createdt = 'createdt',
  /** column name */
  Rcmdtnid = 'rcmdtnid',
  /** column name */
  Rcmdtnresponse = 'rcmdtnresponse',
  /** column name */
  Updatedt = 'updatedt',
}

/** order by stddev() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Stddev_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Stddev_Pop_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Stddev_Samp_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by sum() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Sum_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Var_Pop_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Var_Samp_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** order by variance() on columns of table "eanalytics.engineeringrcmdtnresponses" */
export type Eanalytics_Engineeringrcmdtnresponses_Variance_Order_By = {
  rcmdtnid?: Maybe<Order_By>;
};

/** columns and relationships of "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns = {
  __typename?: 'eanalytics_engineeringrcmdtns';
  createdt: Scalars['timestamp'];
  /** An array relationship */
  engineeringrcmdtnresponses: Array<Eanalytics_Engineeringrcmdtnresponses>;
  /** An object relationship */
  location: Eanalytics_Locations;
  locationid: Scalars['Int'];
  rcmdtncomment: Scalars['String'];
  rcmdtncompletedstatus: Scalars['String'];
  rcmdtnid: Scalars['Int'];
  rcmdtnnum?: Maybe<Scalars['String']>;
  updatedt: Scalars['timestamp'];
};

/** columns and relationships of "eanalytics.engineeringrcmdtns" */
export type Eanalytics_EngineeringrcmdtnsEngineeringrcmdtnresponsesArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>;
};

/** order by aggregate values of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Aggregate_Order_By = {
  avg?: Maybe<Eanalytics_Engineeringrcmdtns_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eanalytics_Engineeringrcmdtns_Max_Order_By>;
  min?: Maybe<Eanalytics_Engineeringrcmdtns_Min_Order_By>;
  stddev?: Maybe<Eanalytics_Engineeringrcmdtns_Stddev_Order_By>;
  stddev_pop?: Maybe<Eanalytics_Engineeringrcmdtns_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eanalytics_Engineeringrcmdtns_Stddev_Samp_Order_By>;
  sum?: Maybe<Eanalytics_Engineeringrcmdtns_Sum_Order_By>;
  var_pop?: Maybe<Eanalytics_Engineeringrcmdtns_Var_Pop_Order_By>;
  var_samp?: Maybe<Eanalytics_Engineeringrcmdtns_Var_Samp_Order_By>;
  variance?: Maybe<Eanalytics_Engineeringrcmdtns_Variance_Order_By>;
};

/** order by avg() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Avg_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eanalytics.engineeringrcmdtns". All fields are combined with a logical 'AND'. */
export type Eanalytics_Engineeringrcmdtns_Bool_Exp = {
  _and?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Bool_Exp>>;
  _not?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
  _or?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Bool_Exp>>;
  createdt?: Maybe<Timestamp_Comparison_Exp>;
  engineeringrcmdtnresponses?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>;
  location?: Maybe<Eanalytics_Locations_Bool_Exp>;
  locationid?: Maybe<Int_Comparison_Exp>;
  rcmdtncomment?: Maybe<String_Comparison_Exp>;
  rcmdtncompletedstatus?: Maybe<String_Comparison_Exp>;
  rcmdtnid?: Maybe<Int_Comparison_Exp>;
  rcmdtnnum?: Maybe<String_Comparison_Exp>;
  updatedt?: Maybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Max_Order_By = {
  createdt?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  rcmdtncomment?: Maybe<Order_By>;
  rcmdtncompletedstatus?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnnum?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** order by min() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Min_Order_By = {
  createdt?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  rcmdtncomment?: Maybe<Order_By>;
  rcmdtncompletedstatus?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnnum?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "eanalytics.engineeringrcmdtns". */
export type Eanalytics_Engineeringrcmdtns_Order_By = {
  createdt?: Maybe<Order_By>;
  engineeringrcmdtnresponses_aggregate?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Aggregate_Order_By>;
  location?: Maybe<Eanalytics_Locations_Order_By>;
  locationid?: Maybe<Order_By>;
  rcmdtncomment?: Maybe<Order_By>;
  rcmdtncompletedstatus?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
  rcmdtnnum?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** select columns of table "eanalytics.engineeringrcmdtns" */
export enum Eanalytics_Engineeringrcmdtns_Select_Column {
  /** column name */
  Createdt = 'createdt',
  /** column name */
  Locationid = 'locationid',
  /** column name */
  Rcmdtncomment = 'rcmdtncomment',
  /** column name */
  Rcmdtncompletedstatus = 'rcmdtncompletedstatus',
  /** column name */
  Rcmdtnid = 'rcmdtnid',
  /** column name */
  Rcmdtnnum = 'rcmdtnnum',
  /** column name */
  Updatedt = 'updatedt',
}

/** order by stddev() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Stddev_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Stddev_Pop_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Stddev_Samp_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by sum() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Sum_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Var_Pop_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Var_Samp_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** order by variance() on columns of table "eanalytics.engineeringrcmdtns" */
export type Eanalytics_Engineeringrcmdtns_Variance_Order_By = {
  locationid?: Maybe<Order_By>;
  rcmdtnid?: Maybe<Order_By>;
};

/** columns and relationships of "eanalytics.locations" */
export type Eanalytics_Locations = {
  __typename?: 'eanalytics_locations';
  addressline1: Scalars['String'];
  addressline2?: Maybe<Scalars['String']>;
  cbiid: Scalars['Int'];
  clientserviceteamtiv: Scalars['money'];
  country?: Maybe<Scalars['String']>;
  createdt: Scalars['timestamp'];
  divisionnm?: Maybe<Scalars['String']>;
  /** An array relationship */
  engineeringlocations: Array<Eanalytics_Engineeringlocations>;
  /** An array relationship */
  engineeringrcmdtns: Array<Eanalytics_Engineeringrcmdtns>;
  locationid: Scalars['Int'];
  locationnm: Scalars['String'];
  /** An object relationship */
  org: Eanalytics_Orgs;
  orgid: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  updatedt: Scalars['timestamp'];
};

/** columns and relationships of "eanalytics.locations" */
export type Eanalytics_LocationsEngineeringlocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringlocations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringlocations_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringlocations_Bool_Exp>;
};

/** columns and relationships of "eanalytics.locations" */
export type Eanalytics_LocationsEngineeringrcmdtnsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
};

/** order by aggregate values of table "eanalytics.locations" */
export type Eanalytics_Locations_Aggregate_Order_By = {
  avg?: Maybe<Eanalytics_Locations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Eanalytics_Locations_Max_Order_By>;
  min?: Maybe<Eanalytics_Locations_Min_Order_By>;
  stddev?: Maybe<Eanalytics_Locations_Stddev_Order_By>;
  stddev_pop?: Maybe<Eanalytics_Locations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Eanalytics_Locations_Stddev_Samp_Order_By>;
  sum?: Maybe<Eanalytics_Locations_Sum_Order_By>;
  var_pop?: Maybe<Eanalytics_Locations_Var_Pop_Order_By>;
  var_samp?: Maybe<Eanalytics_Locations_Var_Samp_Order_By>;
  variance?: Maybe<Eanalytics_Locations_Variance_Order_By>;
};

/** order by avg() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Avg_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "eanalytics.locations". All fields are combined with a logical 'AND'. */
export type Eanalytics_Locations_Bool_Exp = {
  _and?: Maybe<Array<Eanalytics_Locations_Bool_Exp>>;
  _not?: Maybe<Eanalytics_Locations_Bool_Exp>;
  _or?: Maybe<Array<Eanalytics_Locations_Bool_Exp>>;
  addressline1?: Maybe<String_Comparison_Exp>;
  addressline2?: Maybe<String_Comparison_Exp>;
  cbiid?: Maybe<Int_Comparison_Exp>;
  clientserviceteamtiv?: Maybe<Money_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  createdt?: Maybe<Timestamp_Comparison_Exp>;
  divisionnm?: Maybe<String_Comparison_Exp>;
  engineeringlocations?: Maybe<Eanalytics_Engineeringlocations_Bool_Exp>;
  engineeringrcmdtns?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
  locationid?: Maybe<Int_Comparison_Exp>;
  locationnm?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Eanalytics_Orgs_Bool_Exp>;
  orgid?: Maybe<Int_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  updatedt?: Maybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Max_Order_By = {
  addressline1?: Maybe<Order_By>;
  addressline2?: Maybe<Order_By>;
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  createdt?: Maybe<Order_By>;
  divisionnm?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  locationnm?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** order by min() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Min_Order_By = {
  addressline1?: Maybe<Order_By>;
  addressline2?: Maybe<Order_By>;
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  createdt?: Maybe<Order_By>;
  divisionnm?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  locationnm?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "eanalytics.locations". */
export type Eanalytics_Locations_Order_By = {
  addressline1?: Maybe<Order_By>;
  addressline2?: Maybe<Order_By>;
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  createdt?: Maybe<Order_By>;
  divisionnm?: Maybe<Order_By>;
  engineeringlocations_aggregate?: Maybe<Eanalytics_Engineeringlocations_Aggregate_Order_By>;
  engineeringrcmdtns_aggregate?: Maybe<Eanalytics_Engineeringrcmdtns_Aggregate_Order_By>;
  locationid?: Maybe<Order_By>;
  locationnm?: Maybe<Order_By>;
  org?: Maybe<Eanalytics_Orgs_Order_By>;
  orgid?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** select columns of table "eanalytics.locations" */
export enum Eanalytics_Locations_Select_Column {
  /** column name */
  Addressline1 = 'addressline1',
  /** column name */
  Addressline2 = 'addressline2',
  /** column name */
  Cbiid = 'cbiid',
  /** column name */
  Clientserviceteamtiv = 'clientserviceteamtiv',
  /** column name */
  Country = 'country',
  /** column name */
  Createdt = 'createdt',
  /** column name */
  Divisionnm = 'divisionnm',
  /** column name */
  Locationid = 'locationid',
  /** column name */
  Locationnm = 'locationnm',
  /** column name */
  Orgid = 'orgid',
  /** column name */
  State = 'state',
  /** column name */
  Updatedt = 'updatedt',
}

/** order by stddev() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Stddev_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Stddev_Pop_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Stddev_Samp_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by sum() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Sum_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Var_Pop_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Var_Samp_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** order by variance() on columns of table "eanalytics.locations" */
export type Eanalytics_Locations_Variance_Order_By = {
  cbiid?: Maybe<Order_By>;
  clientserviceteamtiv?: Maybe<Order_By>;
  locationid?: Maybe<Order_By>;
  orgid?: Maybe<Order_By>;
};

/** columns and relationships of "eanalytics.orgs" */
export type Eanalytics_Orgs = {
  __typename?: 'eanalytics_orgs';
  createdt: Scalars['timestamp'];
  /** An array relationship */
  locations: Array<Eanalytics_Locations>;
  orgid: Scalars['Int'];
  orgnm: Scalars['String'];
  prospectclientnum?: Maybe<Scalars['String']>;
  updatedt: Scalars['timestamp'];
};

/** columns and relationships of "eanalytics.orgs" */
export type Eanalytics_OrgsLocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Locations_Order_By>>;
  where?: Maybe<Eanalytics_Locations_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "eanalytics.orgs". All fields are combined with a logical 'AND'. */
export type Eanalytics_Orgs_Bool_Exp = {
  _and?: Maybe<Array<Eanalytics_Orgs_Bool_Exp>>;
  _not?: Maybe<Eanalytics_Orgs_Bool_Exp>;
  _or?: Maybe<Array<Eanalytics_Orgs_Bool_Exp>>;
  createdt?: Maybe<Timestamp_Comparison_Exp>;
  locations?: Maybe<Eanalytics_Locations_Bool_Exp>;
  orgid?: Maybe<Int_Comparison_Exp>;
  orgnm?: Maybe<String_Comparison_Exp>;
  prospectclientnum?: Maybe<String_Comparison_Exp>;
  updatedt?: Maybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "eanalytics.orgs". */
export type Eanalytics_Orgs_Order_By = {
  createdt?: Maybe<Order_By>;
  locations_aggregate?: Maybe<Eanalytics_Locations_Aggregate_Order_By>;
  orgid?: Maybe<Order_By>;
  orgnm?: Maybe<Order_By>;
  prospectclientnum?: Maybe<Order_By>;
  updatedt?: Maybe<Order_By>;
};

/** select columns of table "eanalytics.orgs" */
export enum Eanalytics_Orgs_Select_Column {
  /** column name */
  Createdt = 'createdt',
  /** column name */
  Orgid = 'orgid',
  /** column name */
  Orgnm = 'orgnm',
  /** column name */
  Prospectclientnum = 'prospectclientnum',
  /** column name */
  Updatedt = 'updatedt',
}

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "eanalytics.engineeringlocations" */
  eanalytics_engineeringlocations: Array<Eanalytics_Engineeringlocations>;
  /** fetch data from the table: "eanalytics.engineeringlocations" using primary key columns */
  eanalytics_engineeringlocations_by_pk?: Maybe<Eanalytics_Engineeringlocations>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtnresponses" */
  eanalytics_engineeringrcmdtnresponses: Array<Eanalytics_Engineeringrcmdtnresponses>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtnresponses" using primary key columns */
  eanalytics_engineeringrcmdtnresponses_by_pk?: Maybe<Eanalytics_Engineeringrcmdtnresponses>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtns" */
  eanalytics_engineeringrcmdtns: Array<Eanalytics_Engineeringrcmdtns>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtns" using primary key columns */
  eanalytics_engineeringrcmdtns_by_pk?: Maybe<Eanalytics_Engineeringrcmdtns>;
  /** fetch data from the table: "eanalytics.locations" */
  eanalytics_locations: Array<Eanalytics_Locations>;
  /** fetch data from the table: "eanalytics.locations" using primary key columns */
  eanalytics_locations_by_pk?: Maybe<Eanalytics_Locations>;
  /** fetch data from the table: "eanalytics.orgs" */
  eanalytics_orgs: Array<Eanalytics_Orgs>;
  /** fetch data from the table: "eanalytics.orgs" using primary key columns */
  eanalytics_orgs_by_pk?: Maybe<Eanalytics_Orgs>;
  hello?: Maybe<Scalars['String']>;
  job?: Maybe<Array<Maybe<Job>>>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
};

export type Query_RootEanalytics_EngineeringlocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringlocations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringlocations_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringlocations_Bool_Exp>;
};

export type Query_RootEanalytics_Engineeringlocations_By_PkArgs = {
  locationid: Scalars['Int'];
};

export type Query_RootEanalytics_EngineeringrcmdtnresponsesArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>;
};

export type Query_RootEanalytics_Engineeringrcmdtnresponses_By_PkArgs = {
  rcmdtnid: Scalars['Int'];
};

export type Query_RootEanalytics_EngineeringrcmdtnsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
};

export type Query_RootEanalytics_Engineeringrcmdtns_By_PkArgs = {
  rcmdtnid: Scalars['Int'];
};

export type Query_RootEanalytics_LocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Locations_Order_By>>;
  where?: Maybe<Eanalytics_Locations_Bool_Exp>;
};

export type Query_RootEanalytics_Locations_By_PkArgs = {
  locationid: Scalars['Int'];
};

export type Query_RootEanalytics_OrgsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Orgs_Order_By>>;
  where?: Maybe<Eanalytics_Orgs_Bool_Exp>;
};

export type Query_RootEanalytics_Orgs_By_PkArgs = {
  orgid: Scalars['Int'];
};

export type Query_RootJobArgs = {
  id: Scalars['Int'];
};

export type Query_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};

export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "eanalytics.engineeringlocations" */
  eanalytics_engineeringlocations: Array<Eanalytics_Engineeringlocations>;
  /** fetch data from the table: "eanalytics.engineeringlocations" using primary key columns */
  eanalytics_engineeringlocations_by_pk?: Maybe<Eanalytics_Engineeringlocations>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtnresponses" */
  eanalytics_engineeringrcmdtnresponses: Array<Eanalytics_Engineeringrcmdtnresponses>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtnresponses" using primary key columns */
  eanalytics_engineeringrcmdtnresponses_by_pk?: Maybe<Eanalytics_Engineeringrcmdtnresponses>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtns" */
  eanalytics_engineeringrcmdtns: Array<Eanalytics_Engineeringrcmdtns>;
  /** fetch data from the table: "eanalytics.engineeringrcmdtns" using primary key columns */
  eanalytics_engineeringrcmdtns_by_pk?: Maybe<Eanalytics_Engineeringrcmdtns>;
  /** fetch data from the table: "eanalytics.locations" */
  eanalytics_locations: Array<Eanalytics_Locations>;
  /** fetch data from the table: "eanalytics.locations" using primary key columns */
  eanalytics_locations_by_pk?: Maybe<Eanalytics_Locations>;
  /** fetch data from the table: "eanalytics.orgs" */
  eanalytics_orgs: Array<Eanalytics_Orgs>;
  /** fetch data from the table: "eanalytics.orgs" using primary key columns */
  eanalytics_orgs_by_pk?: Maybe<Eanalytics_Orgs>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
};

export type Subscription_RootEanalytics_EngineeringlocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringlocations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringlocations_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringlocations_Bool_Exp>;
};

export type Subscription_RootEanalytics_Engineeringlocations_By_PkArgs = {
  locationid: Scalars['Int'];
};

export type Subscription_RootEanalytics_EngineeringrcmdtnresponsesArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtnresponses_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtnresponses_Bool_Exp>;
};

export type Subscription_RootEanalytics_Engineeringrcmdtnresponses_By_PkArgs = {
  rcmdtnid: Scalars['Int'];
};

export type Subscription_RootEanalytics_EngineeringrcmdtnsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Engineeringrcmdtns_Order_By>>;
  where?: Maybe<Eanalytics_Engineeringrcmdtns_Bool_Exp>;
};

export type Subscription_RootEanalytics_Engineeringrcmdtns_By_PkArgs = {
  rcmdtnid: Scalars['Int'];
};

export type Subscription_RootEanalytics_LocationsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Locations_Order_By>>;
  where?: Maybe<Eanalytics_Locations_Bool_Exp>;
};

export type Subscription_RootEanalytics_Locations_By_PkArgs = {
  locationid: Scalars['Int'];
};

export type Subscription_RootEanalytics_OrgsArgs = {
  distinct_on?: Maybe<Array<Eanalytics_Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Eanalytics_Orgs_Order_By>>;
  where?: Maybe<Eanalytics_Orgs_Bool_Exp>;
};

export type Subscription_RootEanalytics_Orgs_By_PkArgs = {
  orgid: Scalars['Int'];
};

export type Subscription_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};

export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['uuid'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: Maybe<Array<Test_Bool_Exp>>;
  _not?: Maybe<Test_Bool_Exp>;
  _or?: Maybe<Array<Test_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value',
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
