import session from 'express-session';

export interface UserSession extends session.SessionData {
  userId: string;
}
