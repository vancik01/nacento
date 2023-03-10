import { AccordionSummary } from "@mui/material";
import { Switch } from "@mui/material";
import { Button } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Accordion } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useData } from "../context/AppWrap";
import { useLayout } from "../context/LayoutContext";
import ArrowDown from "../public/SVG/ArrowDown";
import Logo from "../public/SVG/Logo";
import PaintBrush from "../public/SVG/PaintBrush";
import TableIcon from "../public/SVG/TableIcon";
import { motion } from "framer-motion";
import { layoutConfig } from "../lib/data";
import ButtonPrimary from "./ButtonPrimary";
import Paper from "../public/SVG/Paper";
import { AnimatePresence } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
import CloseSidebar from "../public/SVG/CloseSidebar";
import VariantIcon from "../public/SVG/VariantIcon";
import PageIcon from "../public/SVG/PageIcon";
import BlockIcon from "../public/SVG/BlockIcon";
import Pro from "./Pro";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function Sidebar() {
	const {
		getTitle,
		headers,
		reorderingBlocks,
		setreorderingBlocks,
		setdownload,
		download,
		displaySidebar,
		setdisplaySidebar,
		handleSave,
		saving,
		addSection,
	} = useData();

	const {
		displayColumns,
		handleDisplayColumnsChange,
		setprimaryColor,
		primaryColor,
		isHorizontal,
		setisHorizontal,
		changeVariant,
		variant,
	} = useLayout();
	const [opened, setopened] = useState("");

	function handleSetOpen(id) {
		if (opened === "blok" && reorderingBlocks) {
			setreorderingBlocks(false);
		}
		if (opened === id) {
			setopened("");
		} else {
			setopened(id);
		}
	}

	const theme = createTheme({
		typography: {
			fontFamily: "Poppins",
			fontSize: 10,
		},
		palette: {
			primary: {
				main: primaryColor,
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="fixed left-0 top-0 bottom-0 z-50 w-[300px] ">
				<div className="relative w-fit">
					<div className="py-10 px-6  shadow-lg bg-white h-screen">
						<div className="flex flex-col min-h-full">
							<div className="min-w-28 w-28">
								<Logo color={primaryColor}></Logo>
							</div>

							<div className="mt-10">
								<Accordion expanded={opened === "strana"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("strana");
										}}
									>
										<div className="flex items-center gap-2">
											<div className="w-4">
												<PageIcon color={primaryColor}></PageIcon>
											</div>
											<div>Strana</div>
										</div>
									</AccordionSummary>

									<AccordionDetails>
										<div>
											<h3>Orient??cia:</h3>
											<div className="flex items-center gap-4 mt-3">
												<button
													onClick={() => {
														setisHorizontal(false);
													}}
													style={{
														backgroundColor: !isHorizontal ? primaryColor : "",
													}}
													className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md"
												>
													<div className="w-5">
														<Paper
															color={isHorizontal ? "#d6d6d6" : "#fff"}
														></Paper>
													</div>
												</button>

												<button
													onClick={() => {
														setisHorizontal(true);
													}}
													style={{
														backgroundColor: isHorizontal ? primaryColor : "",
													}}
													className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md"
												>
													<div className="w-5 -rotate-90">
														<Paper
															color={!isHorizontal ? "#d6d6d6" : "#fff"}
														></Paper>
													</div>
												</button>
											</div>
										</div>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={opened === "sekcia"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("sekcia");
										}}
									>
										<div className="flex items-center gap-2">
											<div className="w-4">
												<PageIcon color={primaryColor}></PageIcon>
											</div>
											<div>Sekcia</div>
										</div>
									</AccordionSummary>

									<AccordionDetails>
										<div>
											<ButtonPrimary className="w-full" onClick={addSection}>
												Prida?? sekciu
											</ButtonPrimary>
										</div>
									</AccordionDetails>
								</Accordion>

								<Accordion expanded={opened === "blok"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("blok");
										}}
									>
										<div className="flex items-center gap-2">
											<div className="w-4">
												<BlockIcon color={primaryColor}></BlockIcon>
											</div>
											<div>Blok</div>
										</div>
									</AccordionSummary>

									<AccordionDetails>
										<div className="flex  items-center">
											<ButtonPrimary
												className="w-full"
												variant="outlined"
												style={{ fontSize: 12 }}
												onClick={() => {
													setreorderingBlocks(!reorderingBlocks);
												}}
											>
												{reorderingBlocks ? "Ulo??i??" : "Usporiada?? bloky"}
											</ButtonPrimary>
										</div>
									</AccordionDetails>
								</Accordion>

								<Accordion expanded={opened === "tabulka"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("tabulka");
										}}
									>
										<div className="flex items-center gap-2">
											<TableIcon color={primaryColor}></TableIcon>
											<div className="flex flex-row gap-3 items-center">
												<div>Tabulka</div>
												<Pro></Pro>
											</div>
										</div>
									</AccordionSummary>
									<AccordionDetails>
										<div>
											<h3>Zobrazi?? st??pce</h3>
											<div className="flex flex-col items-start justify-between flex-wrap gap-2 mt-4">
												{headers?.map((header, i) => {
													return (
														<div
															key={i}
															className="flex items-center justify-between w-full text-xs"
														>
															<div>
																{getTitle(header, "sk").long}{" "}
																<span className="text-gray-300">
																	({getTitle(header, "sk").short})
																</span>
															</div>
															<Switch
																size="small"
																defaultChecked={displayColumns.includes(header)}
																onChange={() => {
																	handleDisplayColumnsChange(header);
																}}
															/>
														</div>
													);
												})}
											</div>
										</div>
									</AccordionDetails>
								</Accordion>

								<Accordion expanded={opened === "vzhlad"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("vzhlad");
										}}
									>
										<div className="flex items-center gap-2">
											<div className="w-4">
												<PaintBrush color={primaryColor}></PaintBrush>
											</div>
											<div>Vzh??ad</div>
										</div>
									</AccordionSummary>
									<AccordionDetails>
										<div className="mb-2 font-medium">Hlavn?? farba</div>

										<div className="grid grid-cols-5 gap-2 w-52">
											{layoutConfig.defaultColors.map((color, i) => {
												return (
													<button
														key={i}
														className={`rounded-lg w-full aspect-square bg-opacity-40 transition-all duration-75 ${
															color == primaryColor
																? "shadow-md border-white border-opacity-60 border-4"
																: ""
														}`}
														style={{ backgroundColor: color }}
														onClick={() => {
															setprimaryColor(color);
														}}
													></button>
												);
											})}
										</div>
									</AccordionDetails>
								</Accordion>

								<Accordion expanded={opened === "variant"}>
									<AccordionSummary
										expandIcon={<ArrowDown />}
										onClick={() => {
											handleSetOpen("variant");
										}}
									>
										<div className="flex items-center gap-2">
											<div className="w-4">
												<VariantIcon color={primaryColor} />
											</div>
											<div>Variant</div>
										</div>
									</AccordionSummary>

									<AccordionDetails>
										<div className="mb-4 font-medium">
											Variant cenovej ponuky
										</div>
										<div className="flex justify-center items-center flex-col gap-2">
											<ButtonPrimary
												className="text-sm w-full"
												onClick={() => {
													changeVariant("basic");
												}}
												color={variant.id !== "basic" ? "#d5d5d5" : ""}
											>
												Jednoduch??
											</ButtonPrimary>
											<ButtonPrimary
												onClick={() => {
													changeVariant("normal");
												}}
												className="text-sm w-full"
												color={variant.id !== "normal" ? "#d5d5d5" : ""}
											>
												??tandard
											</ButtonPrimary>

											<div className="relative w-full mt-10">
												<ButtonPrimary
													onClick={() => {
														changeVariant("pro");
													}}
													className="text-sm w-full"
													color={variant.id !== "pro" ? "#d5d5d5" : ""}
												>
													Profesion??lna
												</ButtonPrimary>
												<div className="absolute -top-2 -right-2">
													<Pro></Pro>
												</div>
											</div>
										</div>
									</AccordionDetails>
								</Accordion>
							</div>

							<div className="mt-auto w-full">
								<ButtonPrimary
									scale={0.98}
									className="w-full text-sm"
									onClick={handleSave}
									style={{ color: primaryColor }}
									disabled={saving}
								>
									Ulo??i?? zmeny
								</ButtonPrimary>

								<button
									scale={0.98}
									className="w-full text-sm mt-6"
									onClick={() => {
										setdownload(true);
									}}
									style={{ color: primaryColor }}
								>
									Stiahnu?? ponuku
								</button>

								<button className="flex w-full mt-6">
									<div
										className="p-2 ml-auto"
										onClick={() => {
											setdisplaySidebar(false);
										}}
									>
										<div className="w-2">
											<CloseSidebar></CloseSidebar>
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}
