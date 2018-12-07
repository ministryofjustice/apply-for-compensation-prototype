// module.exports = function (router) {
	// // START__####################################################################################################
	//
	// Add content key/value pairs here
	// Add content key/value pairs here
	// Content variables are isted in the same order as folders when sorted a-z
	// If a variable has been defined in a previous file it is not defined again
	// Comments sepperate the list
	// This list should be moved in to it's own file in the future
	module.exports = {
	    addressLine1Label: 'Building and street <span class="govuk-visually-hidden">line 1 of 2</span>',
	    addressLine2Label: '<span class="govuk-visually-hidden">Building and street line 2 of 2</span>',
	    addressPostcodeLabel: 'Postcode',
	    addressPostcodeOptionalLabel: 'Postcode (optional)',
	    addressQuestion: 'Enter your address',
	    britishCitizenQuestion: 'Are you a British citizen or EU national?',
			britishCitizenError: 'Select yes if you are a British citizen or EU national',
	    compensationWhyNotQuestion: "Why did you not apply for compensation from another source?",
	    countyLabel: 'County (optional)',
	    crimeReferenceNumberHint: 'This is the reference number the police gave the crime when it was reported.',
	    crimeReferenceNumberQuestion: 'What\'s the crime reference number?',
	    crimeReferenceNumberQuestionCA: 'Crime reference number?',
			crimeReferenceError: 'Enter the crime reference number',
	    crimeReportedDateHint: 'For example, 31 3 2018. You can enter an approximate date',
	    crimeReportedDateQuestion: 'When was the crime reported to police?',
	    dateOfBirthQuestion: "Enter your date of birth",
	    declarationBody: 'By continuing you confirm that the information you will give is true as far as you know.',
	    declarationHeading: 'Declaration',
	    doYouKnowOffenderQuestion: "Do you know the name of the offender?",
	    offenderNameHint: "We will not contact the offender.",
	    emailAddressError: "Enter your email address, for example john.smith@email.com",
	    emailAddressErrorSubHeader: "Enter your email address?",
	    emailAddressHint: "We'll use this to contact you about your application for example, to request more information and tell you about our decision",
	    emailAddressQuestion: "Enter your email address",
	    errorBeforeIncident: "Your date of birth must be before the crime happened",
	    errorIncompleteMessage: "Enter your date of birth and include a day, month and year",
	    errorMessageContent: 'Select Once or Over a period of time',
	    errorMessageTitle: 'There is a problem',
	    errorPastMessage: "Your date of birth must be in the past",
			errorBeforeReported: "The date the crime happened must be the same as or before the date it was reported to the police",
	    errorIncidentIncomplete: "Enter the date the crime happened and include a day, month and year",
	    errorIncidentPast: "The date the crime happened must be in the past",
			errorAbuseStartPast: 'The date the crime started must be in the past',
			errorAbuseStartIncomplete: 'Enter the date the crime started and include a month and year',
			errorAbuseStartBeforeReported: 'The date the crime started must be before the date the crime was reported to the police',
			errorAbuseEndPast: 'The date the crime stopped must be in the past',
			errorAbuseEndIncomplete: 'Enter the date the crime stopped and include a month and year',
			errorAbuseEndBeforeReported: 'The date the crime stopped must be on or before the date the crime was reported to the police',
			errorAbuseEndAfterStarted: 'The date the crime stopped must be after the date the crime started',
	    howMuchCompensationHint: 'You can also tell us if you are still waiting to find out.',
	    howMuchCompensationQuestion: 'How much compensation did you get?',
			impactHeading: 'Before you continue',
	    incidentDateHeading: "When did the crime happen?",
	    incidentDateHint: 'For example, 31 3 2018. You can enter an approximate date ',
	    incidentLocationHeading: "Where did the crime happen?",
			incidentLocationReveal: "Enter the town or location",
			incidentLocationRevealOther: "Enter the location",
	    incidentReportedQuestion: 'Was the crime reported to the police?',
			incidentReportedError: "Select yes if the crime was reported to the police",
	    itemOneValue: 'Once',
	    itemTwoValue: 'Over a period of time',
      locationTownQuestion: 'Enter more details about where the crime happened',
	    nameErrorNoFirstName: "Enter your first name",
	    nameErrorNoLastName: "Enter your last name",
	    nameErrorNoTitle: "Enter your title",
	    nameOtherError: "Select yes if you have been known by any other names",
	    nameOtherQuestion: 'Have you ever been known by any other names?',
	    nameOtherWhatQuestion: "What other names have you used?",
			otherNameWhatError: "Enter the other names you have used",
	    nameQuestion: 'Enter your name',
	    nameTitleField: 'Title',
	    nameFirstNameField: 'First name',
	    nameLastNameField: 'Last name',
	    offenderNameQuestion: 'Enter their name',
	    offenderNameQuestionCA: 'Offenders name',
	    ongoingRelationshipQuestion: "Have you have any contact with this person since the incident?",
	    ongoingRelationshipHint: "We will not pay compensation if the offender could benefit from it.",
	    otherCompensationHint: 'For example, if you claimed insurance, sought civil damages or were paid compensation by a court.',
	    otherCompensationQuestion: 'Have you applied for or received any other form of compensation?',
			compYesWhoHint:'Who did you apply to?',
			compYesAmountHint:'How much did you receive?',
			compWaitingHint: 'Who did you apply to?',
			compNoHint: 'Briefly explain why not.',
	    over18Question: 'Are you 18 or over?',
			over18errorGuidance: 'Select yes if you are over 18',
	    periodOfAbuseEndQuestion: 'When did it stop?',
	    periodOfAbuseHint: 'For example, 03 2018. You can enter an approximate date',
	    periodOfAbuseStartQuestion: 'When did it start?',
	    phoneNumberHint: "We'll use this to contact you about your application for example, to request more information",
	    phoneNumberQuestion: "Enter your telephone number",
			phoneNumberError: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192',
	    policeForceHint: "Enter the police force name, for example, Humberside police.",
	    policeForceQuestion: 'Was the crime reported to Police Scotland Greater Glasgow?',
      policeForceManualQuestion: 'What force was the crime reported to?',
	    previousApplicationsQuestion: 'Have you applied for compensation from us for this crime before?',
	    reportingDelayQuestion: "Select a reason for the delay in reporting the crime to the police",
			selectAddressLable: 'Select an address',
	    sexualAbuseQuestion: 'Were you a victim of sexual assault or abuse?',
			sexualAbuseError: 'Select yes if you were a victim of sexual assault or abuse',
	    singleOrMultipleIncidentsQuestion: 'Did the crime happen once or over a period of time?',
	    townOrCityLabel: 'Town or city',
			transitionHeading: 'You are being redirected to our other application site',
	    warningText: "If you deliberately give false or misleading information, you may get less compensation or be prosecuted.",
	    whatIsRelationshipQuestion: "If you have contact with the offender, describe it below",
	    whoCompensationQuestion: 'Who else have you applied to for compensation?',
	    whoIsMakingTheApplicationQuestion: 'Who are you applying for?',
			whoIsMakingTheApplicationError: 'Select Myself if you are the person applying for compensation',
	    whyDelayQuestion: 'Select a reason for the delay in making your application',
			reportedDateErrorPast: 'The date the crime was reported to the police must be in the past',
			reportedDateIncompleteError: 'Enter the date the crime was reported to the police and include a day, month and year',
			reportedDateErrorBlank: 'Enter the date the crime was reported to the police',
			yourChoicesHeading: 'Select the option that applies to you',
			notEligibleHeading: 'You can not get compensation',
			capacityReasonHint: 'Explain why not',
			otherDelayReasonHint: 'Explain what the other reasons are',
			medicalReasonHint:'Describe the medical reasons',
			otherReasonHint: 'Describe the other reasons',
			under18DelayReasonHint: 'Explain why this caused a delay',
			manualAddressErrorBuildingStreetBlank: 'Enter the building and street where you live',
			manualAddressErrorTownCityBlank: 'Enter the town or city where you live',
	};
	// // END__######################################################################################################
	// }
