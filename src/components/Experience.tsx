import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import Typography from '@mui/material/Typography';

const MainCon = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 9rem;
`;

const ExperienceTitleCon = styled.h2`
    margin: 0;
    font-size: 2rem;
    padding: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
`;

const TimelineOppositeContentCon = styled(TimelineOppositeContent)`
    color: rgb(199, 207, 205);
    font-size: 1.5rem !important;
`;

const TimelineContentCon = styled(TimelineContent)`
    color: rgb(207, 205, 214);
    font-size: 1rem !important;
`;

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <MainCon>
            <ExperienceTitleCon>Experience</ExperienceTitleCon>
            <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: [0.5, 1.2, 1] }} transition={{ duration: 2 }}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContentCon
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.info"
                        >
                            August-2023 - Present
                        </TimelineOppositeContentCon>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <WorkSharpIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContentCon sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Kreditbee
                            </Typography>
                            <Typography>Frontend Developer - Building loan application journey and admin panel for smooth customer experiences. Worked closely with the backend team to ensure seamless integration.</Typography>
                        </TimelineContentCon>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContentCon
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.info"
                        >
                            January 2023 - June-2023
                        </TimelineOppositeContentCon>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <WorkSharpIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContentCon sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Kreditbee
                            </Typography>
                            <Typography>Intern - Developed reusable and responsive components. Collaborated with the team to implement new features.</Typography>
                        </TimelineContentCon>
                    </TimelineItem>
                </Timeline>
            </motion.div>
        </MainCon>
    );
}

export default Experience;