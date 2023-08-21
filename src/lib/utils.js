export const truncate = (str, length) => {
	var dots = str.length > length ? '...' : '';
	return str.substring(0, length) + dots;
};

export function getUniversityName(emailDomain) {
	const universityList = {
		"ajou.ac.kr": "아주대학교",
		"inha.edu": "인하대학교",
		"korea.ac.kr": "고려대학교",
		"yonsei.ac.kr": "연세대학교",
		"snu.ac.kr": "서울대학교",
		"ewha.ac.kr": "이화여자대학교",
		"seoultech.ac.kr": "서울과학기술대학교",
		"skku.edu": "성균관대학교",
		"uos.ac.kr": "서울시립대학교",
		"sookmyung.ac.kr": "숙명여자대학교",
		"konkuk.ac.kr": "건국대학교",
		"cau.ac.kr": "중앙대학교",
		"hanyang.ac.kr": "한양대학교",
		"kw.ac.kr": "광운대학교",
		"skuniv.ac.kr": "성공회대학교",
		"ssu.ac.kr": "숭실대학교",
	};

	return universityList[emailDomain] || "지잡대학교";
}