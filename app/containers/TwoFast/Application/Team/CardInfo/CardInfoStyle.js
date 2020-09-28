/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
export const CardInfoStyle = makeStyles({
  div: {
    padding: 15,
    fontFamily: 'Prompt',
  },
  paperCard: {
    borderRadius: '20px',
  },
  card: {
    padding: 10,
    cursor: 'pointer',
  },
  // ------------------------------ Add new team ---------------------------- //
  buttonBase: {
    width: '100%',
    height: '100%',
  },
  newteamCard: {
    width: '100%',
    height: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  newteamContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newteamAddIcon: {
    fontSize: '4rem',
    color: '#4dabf5',
  },
  newteamText: {
    margin: 0,
    paddingLeft: '7px',
    fontSize: '1.2rem',
  },

  // ------------------------------ TeamCard ---------------------------- //
  topCard: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '9px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  teamLogo: {
    padding: '27px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 3px #ababab',
  },
  teamName: {
    width: '64%',
    alignSelf: 'center',
    fontSize: '1.1rem',
    paddingLeft: '10px',
    fontWeight: 'bold',
  },
  bottomCard: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8px',
  },
});