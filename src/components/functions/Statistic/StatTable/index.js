import {
    Card,
    CardContent,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    withStyles,
} from "@material-ui/core";
import React from "react";

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
    head: {

        fontSize: 16,
        fontWeight: 900,
    },
    body: {
        fontSize: 14,
    },
    "@media (max-width:550px)": {
        head: {
            fontSize: 14,
            fontWeight: 800,
        },
    },
}))(TableCell);

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
    card: {
        marginTop: 10,
        maxHeight: 500,
        overflow: "scroll",
    },
    table: {},

    flag: {
        height: 50,
        width: 80,
        marginRight: 10,
 
    },
    styledTableRow: {
        "&:nth-of-type(odd)": {
            backgroundColor: "rgba(224, 224, 224, 1)",
        },
    },
    confirmedColor: {
        color: "#e53e3e",
        fontSize: 13,
        fontWeight: "bold",
    },
    recoveredColor: {
        color: "#8ACA2B",
        fontSize: 13,
        fontWeight: "bold",
    },
    deathsColor: {
        color: "#718096",
        fontSize: 13,
        fontWeight: "bold",
    },
 
    "@media (max-width:550px)": {
        flag: {
            display: "none",
            padding: 0,
        },
        column: {
            padding: 0,
            margin: 0,
            maxWidth: 50,
        },
    },
});

function StatTable({ rowsData, language }) {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <Typography variant="h5">{language.title}</Typography>
            <Card className={styles.card}>
                <CardContent style={{ paddingTop: 0 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableHead
                                    className={styles.flag}
                                ></StyledTableHead>
                                <StyledTableHead className={styles.column}>
                                    {language.Country}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Confirmed}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Recovered}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Deaths}
                                </StyledTableHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsData.map(
                                ({
                                    flag,
                                    country,
                                    cases,
                                    recovered,
                                    deaths,
                                    todayCases,
                                    todayRecovered,
                                    todayDeaths,
                                }) => (
                                    <StyledTableRow key={country}>
                                        <TableCell className={styles.flag}>
                                            <img
                                                src={flag}
                                                className={styles.flag}
                                                alt='country'
                                            />
                                        </TableCell>
                                        <TableCell
                                            className={styles.column}
                                            component="th"
                                            scope="row"
                                        >
                                            {country}
                                        </TableCell>
                                        <TableCell align="right">
                                            {cases.toLocaleString()}
                                            <Typography
                                                className={
                                                    styles.confirmedColor
                                                }
                                            >
                                                + {todayCases.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            {recovered.toLocaleString()}
                                            <Typography
                                                className={
                                                    styles.recoveredColor
                                                }
                                            >
                                                +{" "}
                                                {todayRecovered.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            {deaths.toLocaleString()}
                                            <Typography
                                                className={styles.deathsColor}
                                            >
                                                + {todayDeaths.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                    </StyledTableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default StatTable;
